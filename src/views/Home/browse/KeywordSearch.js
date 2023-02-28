import React from 'react';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';
import marked from '../../../../public/assets/img/marked.png';

import {
  searchKeywords,
  saveSelectedCategories,
  removeSelectedCategories,
} from './browseMusic.actions';

const theme = {
  container: {
    position: 'static',
    flex: '1',
  },
  inputFocused: {
    outline: 'none',
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  suggestionsContainer: {
    display: 'none',
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: 51,
    backgroundColor: '#fff',
    fontWeight: 300,
    fontSize: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2,
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  suggestion: {
    cursor: 'pointer',
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd',
  },
};

const escapeRegexCharacters = str => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const getSuggestionValue = suggestion => {
  return suggestion.name;
};

const renderSectionTitle = section => {
  return (
    <>
      <li className="title">
        <h4 className="dropdown-title">{section.title}</h4>
      </li>
    </>
  );
};

const checkSelected = (name, parentId, selectedCategories) => {
  const selectedName = selectedCategories.find(_val => {
    if (parentId) {
      return _val._id === name && _val.parentCategory === parentId;
    } else {
      return _val._id === name;
    }
  });
  return selectedName ? true : false;
};

const renderSuggestion = (suggestion, selectedCategories) => {
  return (
    <React.Fragment>
      <div className="d-flex">
        {suggestion.name}
        {checkSelected(
          suggestion._id,
          suggestion.parentCategory ? suggestion.parentCategory._id : null,
          selectedCategories,
        ) ? (
          <img src={marked} style={{ marginLeft: 'auto' }} width="20" alt="" />
        ) : null}
      </div>
    </React.Fragment>
  );
};

const getSectionSuggestions = section => {
  return section.items;
};

class KeywordSearch extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      keywords: [],
      value: '',
      suggestions: [],
      isLoading: false,
      noSuggestions: false,
      //   filterType: filterDropdown[0],
      placeholder: 'Search Keywords',
    };
    this.lastRequestId = null;
  }

  scrollToMyRef = () => {
    let target = document.getElementById('divScroll');
    setTimeout(() => {
      target.scrollTo(0, this.scrollRef.offsetTop);
    }, 1);
  };
  renderSuggestionsContainer = ({ containerProps, children, query }) => {
    return (
      <div className="search-dropdown" {...containerProps}>
        <div>
          <ul
            className="parent-ul"
            ref={ref => (this.scrollRef = ref)}
            id="divScroll"
          >
            {children}
          </ul>
        </div>
      </div>
    );
  };
  getSuggestions = async (value, props, scrollRef) => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const payload = {
      search: escapedValue,
    };

    const doc = await props.searchKeywordsApi(payload);
    this.scrollToMyRef(scrollRef);
    return doc;
  };

  onChange = (e, { newValue, method }) => {
    if (method === 'enter') {
      e.preventDefault();
    } else {
      this.setState({
        value: newValue,
      });
    }
  };

  loadSuggestions = value => {
    // Cancel the previous request
    console.log(value, 'value');
    if (this.lastRequestId !== null) {
      clearTimeout(this.lastRequestId);
    }

    this.setState({
      isLoading: true,
    });

    // Fake request
    this.lastRequestId = setTimeout(async () => {
      let suggetions = await this.getSuggestions(
        value,
        this.props,
        // this.state.filterType.value,
        this.scrollRef,
      );

      let filterSuggestions = [];
      suggetions.map((sugg, index) => {
        let items = [];
        if (sugg.type === 'category') {
          sugg.items.map((item, index) => {
            if (item.type && item.type === 'keyword') {
              if (
                this.props.activeKeywords.length > 0 &&
                this.props.activeKeywords.indexOf(item._id) < 0
              ) {
                // console.log('not in category keyword');
              } else {
                items.push(item);
              }
            } else {
              if (
                this.props.activeCategories.length > 0 &&
                this.props.activeCategories.indexOf(item._id) < 0
              ) {
              } else {
                items.push(item);
              }
            }
            return item;
          });
          sugg.items = items;
          if (sugg.items.length) {
            filterSuggestions.push(sugg);
          }
        } else if (sugg.type === 'keyword') {
          sugg.items.map((item, index) => {
            if (
              this.props.activeKeywords.length > 0 &&
              this.props.activeKeywords.indexOf(item._id) < 0
            ) {
              // console.log('not in keyword');
            } else {
              items.push(item);
            }
            return item;
          });
          sugg.items = items;
          if (sugg.items.length) {
            filterSuggestions.push(sugg);
          }
        }
        return sugg;
      });

      const isInputBlank = value.trim() === '';
      const noSuggestions = !isInputBlank && filterSuggestions.length === 0;
      this.setState({
        isLoading: false,
        suggestions: filterSuggestions,
        noSuggestions,
      });
    }, 1000);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleTagSelection = selectedCategory => {
    this.props.showLoading(true);
    this.props.saveSelectedCategoriesApi(selectedCategory, 'keyword');
    this.props.showLoading(false);
  };

  removeCategories = async tag => {
    this.props.showLoading(true);
    await this.props.removeSelectedCategoriesApi(tag);
    this.props.showLoading(false);
  };

  defaultRenderTag = props => {
    const {
      selectedCategories,
      selectedParentCats,
      // removeSelectedCategoriesApi,
    } = props;
    const setName = tag => {
      if (tag.categoryType === 'slider' || tag.categoryType === 'length') {
        const sliderName = `${tag.name}:${tag.value[0]} - ${tag.value[1]}+`;
        return sliderName;
      }
      return tag.name;
    };
    return selectedParentCats.map((item, index) => (
      <div className="tags-list" key={index}>
        <span className="title">{item.name}:</span>
        {selectedCategories
          .filter(cat => {
            let categoryId = cat.parentCategory ? cat.parentCategory : cat._id;
            if (item._id === categoryId) {
              return cat;
            }
          })
          .map((tag, key) => (
            <span className="item" key={key}>
              {setName(tag)}
              <a
                className="remove-item"
                // onClick={e => removeSelectedCategoriesApi(tag)}
                onClick={e => this.removeCategories(tag)}
              >
                &times;
              </a>
            </span>
          ))}
      </div>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <div className="search-box">
          <div className="search-tags-input">
            {this.defaultRenderTag(this.props)}
            <div className="tag-input">
              <Autosuggest
                shouldRenderSuggestions={value =>
                  value && value.trim().length > 2
                }
                multiSection={true}
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                inputProps={{
                  placeholder: this.state.placeholder,
                  value: this.state.value,
                  onChange: this.onChange,
                }}
                onSuggestionSelected={(event, { suggestion }) => {
                  if (
                    suggestion.itemType === 'category' ||
                    suggestion.itemType === 'keyword'
                  ) {
                    this.handleTagSelection(suggestion);
                    this.setState({
                      value: '',
                    });
                  } else {
                    this.handleRedirection(suggestion.itemType, suggestion);
                    this.setState({
                      value: this.state.value,
                    });
                  }
                }}
                renderSuggestion={e =>
                  renderSuggestion(e, this.props.selectedCategories)
                }
                renderSectionTitle={renderSectionTitle}
                getSectionSuggestions={getSectionSuggestions}
                theme={theme}
                renderSuggestionsContainer={this.renderSuggestionsContainer}
              />
              {this.state.noSuggestions && (
                <div className="no-suggestions">No suggestions</div>
              )}
            </div>
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

function mapStateToProps({ browseMusic }) {
  return {
    musicCategories: browseMusic.musicCategories,
    selectedCategories: browseMusic.selectedCategories,
    selectedParentCats: browseMusic.selectedParentCats,
    activeCategories: browseMusic.activeCategories,
    activeKeywords: browseMusic.activeKeywords,
  };
}

export default connect(mapStateToProps, {
  searchKeywordsApi: searchKeywords,
  saveSelectedCategoriesApi: saveSelectedCategories,
  removeSelectedCategoriesApi: removeSelectedCategories,
})(KeywordSearch);
