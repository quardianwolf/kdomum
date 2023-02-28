import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withStyles } from '@mui/styles';
import {Slider} from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';
import moment from 'moment';
import 'moment-duration-format';
import {
  getCategories,
  setCatSlider,
  saveSelectedCategories,
  removeSelectedCategories,
  saveSelectedKeywords,
  saveSelectedParentCats,
} from './browseMusic.actions';
import Select, { components } from 'react-select';
import { differenceBy } from 'lodash';
import { isMobileOnly } from 'react-device-detect';

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    padding: '10px 0px',
    borderRadius: '0 0 4px 4px',
    backgroundColor: '#FFF',
    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.5)',
    margin: 0,
  }),
  menuList: () => ({
    // maxHeight: '120px',
    // overflow: 'auto',
  }),
  option: (provided, state) => ({
    ...provided,
    background: 'linear-gradient(228.59deg, #e5895a 0%, #e46296 100%)',
    color: '#FFFFFF',
    padding: '6px 12px',
    width: 'auto',
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
    lineHeight: 1,
  }),
  control: () => ({
    width: '100%',
    display: 'flex',
    padding: '2px 0',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  clearIndicator: () => ({
    cursor: 'pointer',
  }),
  indicatorsContainer: () => ({
    position: 'absolute',
    right: 5,
    bottom: 3,
    cursor: 'pointer',
  }),
  placeholder: () => ({
    position: 'relative',
    flex: 1,
    fontSize: 11,
    textAlign: 'center',
    color: '#333333',
  }),
  multiValue: () => ({
    background: 'linear-gradient(228.59deg, #e5895a 0%, #e46296 100%)',
    padding: '3px 6px',
    display: 'flex',
    fontSize: '12px',
    fontWeight: 700,
    alignItems: 'center',
    borderRadius: 20,
  }),
  multiValueLabel: () => ({
    padding: 0,
    color: '#FFFFFF',
    maxWidth: '90px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),
  multiValueRemove: () => ({
    color: '#FFFFFF',
  }),
  noOptionsMessage: () => ({
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 700,
    textAlign: 'center',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};
const CategorySlider = withStyles({
  root: {
    color: '#333333',
    height: 8,
  },
  thumb: {
    height: 36,
    width: 36,
    backgroundColor: '#ffffff',
    border: 'none',
    boxShadow: '0px 0px 10px #ddd',
    marginTop: -14,
    marginLeft: -18,
    '&:focus,&:hover,&$active': {
      boxShadow: '0px 0px 10px #ddd',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 20px)',
    top: -22,
    '& *': {
      background: 'transparent',
      color: '#000',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: '17px',
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    opacity: '0.2',
  },
})(Slider);

const CategoryFilter = React.forwardRef(
  (
    {
      getCategoriesApi,
      musicCategories,
      saveSelectedCategoriesApi,
      removeSelectedCategoriesApi,
      selectedCategories,
      catSlider,
      setCatSliderApi,
      musicSongBuildRef,
      activeCategories,
      activeKeywords,
      saveSelectedKeywordsApi,
      saveSelectedParentCatsApi,
      selectedParentCats,
      refresh,
      showLoading,
    },
    ref,
  ) => {
    const [activate, setActivate] = useState(false);
    const [tab, setActiveTab] = useState(-1);
    const [isMobileDropdownOpen, setDropdown] = useState(false);

    useEffect(() => {
      const fetchCategories = async () => {
        await getCategoriesApi('music');
      };
      fetchCategories();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (refresh) setActivate(true);
    }, [refresh]);

    useEffect(() => {
      setActivate(false);
    }, [activeCategories]);

    const handleCategorySelection = async (e, cat) => {
      setActivate(true);
      showLoading(true);
      if (e.target.checked) {
        saveSelectedCategoriesApi(cat);
      } else {
        removeSelectedCategoriesApi(cat);
      }
      showLoading(false);
    };

    const handleRadioButtonChange = (e, cat) => {
      setActivate(true);
      saveSelectedCategoriesApi({ ...cat, value: e.target.value });
      const sliderVals = { ...catSlider };
      sliderVals[cat._id].value = e.target.value;
      setCatSliderApi(sliderVals);
    };

    const handleSliderChange = (e, newValue, cat) => {
      const sliderVals = { ...catSlider };
      sliderVals[cat._id].value = newValue;
      setCatSliderApi(sliderVals);
    };

    const handleSliderChangeFinished = async (e, newValue, cat) => {
      setActivate(true);
      saveSelectedCategoriesApi({ ...cat, value: newValue });
    };

    const valuetext = value => {
      return moment.duration(value, 'seconds').format('m:ss', {
        trim: false,
      });
    };

    const handleChangeKeyword = (values, cat, parentCatId) => {
      let selectedKeywords = [];
      for (const item of selectedCategories) {
        let keywordExist = cat.frontEndKeywords.filter(keywordItem => {
          return keywordItem._id === item._id;
        });

        if (item.parentCategory === parentCatId && keywordExist.length > 0) {
          selectedKeywords.push(item);
        }
      }

      const selectedValues = [...(values || [])];

      let removedItems = [];
      let addedItems = [];
      if (selectedKeywords.length < selectedValues.length) {
        addedItems = differenceBy(selectedValues, selectedKeywords, '_id');
      } else {
        removedItems = differenceBy(selectedKeywords, selectedValues, '_id');
      }
      showLoading(true);
      const params = {
        category: cat,
        keywords: selectedValues,
        removedItems: removedItems,
        addedItems: addedItems,
      };

      setActivate(true);
      saveSelectedKeywordsApi(params);
      showLoading(false);
    };

    const MenuList = props => {
      return (
        <div style={{ height: 120 }}>
          <Scrollbars
            style={{ zIndex: 9999 }}
            renderThumbVertical={props => (
              <div {...props} className="thumb-vertical" />
            )}
          >
            {props.children}
          </Scrollbars>
        </div>
      );
    };

    const ValueContainer = ({ children, getValue, ...props }) => {
      let maxToShow = 1;
      var length = getValue().length;
      let displayChips = React.Children.toArray(children).slice(0, maxToShow);
      let shouldBadgeShow = length > maxToShow;
      let displayLength = length - maxToShow;
      return (
        <components.ValueContainer {...props}>
          <div className="tags-count-container">
            {!props.selectProps.inputValue && displayChips}
            {displayLength >= 1 && (
              <div className="more-count">
                {shouldBadgeShow && `+ ${displayLength}`}
              </div>
            )}
          </div>
        </components.ValueContainer>
      );
    };

    const Option = props => {
      return (
        <div className="menu-list-option">
          <div className="option">
            <components.Option {...props} />
          </div>
        </div>
      );
    };

    const onTabClick = k => {
      if (tab !== k) {
        setActiveTab(k);
        const document = {
          _id: musicCategories[k]._id,
          name: musicCategories[k].name,
          count: 0,
          isActive: true,
        };
        saveSelectedParentCatsApi(document);
      }
      setDropdown(!isMobileDropdownOpen);
    };

    const getSelectedkeywords = (frontEndKeywords, catId) => {
      let newCategories = [];
      for (const item of selectedCategories) {
        const keywordExist = frontEndKeywords.filter(keywordItem => {
          return item._id === keywordItem._id;
        });
        if (item.parentCategory === catId && keywordExist.length > 0) {
          newCategories.push(item);
        }
      }
      return newCategories;
    };

    const toggleMobileView = () => {
      setDropdown(!isMobileDropdownOpen);
    };

    return (
      <div>
        <div className="keyword-filter">
          {isMobileOnly ? (
            <Button className="btn-filter" onClick={toggleMobileView}>
              {tab < 0
                ? 'Filter'
                : musicCategories.length > 0 && musicCategories[tab].name}
            </Button>
          ) : (
            ''
          )}
          <Tabs
            className={
              isMobileDropdownOpen
                ? 'mobile-dropdown-open'
                : 'mobile-dropdown-close'
            }
            defaultActiveKey="-1"
            activeKey={tab}
            onSelect={k => onTabClick(k)}
          >
            {musicCategories &&
              musicCategories.map((cat, index) => {
                let keywordCount = '';
                selectedParentCats &&
                  selectedParentCats.map(keyArray => {
                    if (keyArray._id === cat._id && keyArray.count !== 0) {
                      keywordCount = keyArray.count;
                    }
                    return keywordCount;
                  });

                const tabTitle = name => {
                  return (
                    <div
                      className={
                        keywordCount > 0 ? 'cat-item selected' : 'cat-item'
                      }
                    >
                      {name}
                      {index !== parseInt(tab) && keywordCount > 0 ? (
                        <span className="selected-count">{keywordCount}</span>
                      ) : (
                        ''
                      )}
                    </div>
                  );
                };

                return (
                  <Tab eventKey={index} key={index} title={tabTitle(cat.name)}>
                    {(cat.categoryType === 'text' ||
                      cat.categoryType === 'textAndIcon') && (
                      <div className="icon-btn-filter vocals">
                        <Scrollbars
                          renderTrackHorizontal={props => (
                            <div
                              {...props}
                              className="track-horizontal"
                              style={{ display: 'none' }}
                            />
                          )}
                          renderThumbHorizontal={props => (
                            <div
                              {...props}
                              className="thumb-horizontal"
                              style={{ display: 'none' }}
                            />
                          )}
                          autoHeight
                          autoHeightMin="100%"
                          autoHeightMax={
                            isMobileOnly
                              ? '440px'
                              : cat.subCategories &&
                                cat.subCategories.length >= 6 &&
                                cat.subCategories.length <= 12
                              ? '65px'
                              : cat.subCategories &&
                                cat.subCategories.length > 12 &&
                                cat.subCategories.length <= 18
                              ? '125px'
                              : '185px'
                          }
                        >
                          <div className="item-container">
                            {cat.subCategories &&
                              cat.subCategories.map((subCat, key) => {
                                return (
                                  <div
                                    key={key}
                                    className="item"
                                    // className={
                                    //   activate === true
                                    //     ? cat.ref === musicSongBuildRef
                                    //       ? 'item song-build blocked'
                                    //       : 'item blocked'
                                    //     : cat.ref === musicSongBuildRef
                                    //     ? 'item song-build'
                                    //     : 'item '
                                    // }
                                  >
                                    <input
                                      type="checkbox"
                                      id={index + '-' + key}
                                      className="check_none"
                                      onChange={e => {
                                        handleCategorySelection(e, subCat);
                                      }}
                                      checked={subCat.checked}
                                      disabled={
                                        activeCategories.length > 0 &&
                                        activeCategories.indexOf(subCat._id) < 0
                                      }
                                    />
                                    <label
                                      className={
                                        subCat.frontEndKeywords &&
                                        subCat.frontEndKeywords.length > 0
                                          ? 'check_lbl mutli-selection'
                                          : 'check_lbl'
                                      }
                                      htmlFor={index + '-' + key}
                                    >
                                      {subCat.categoryType === 'textAndIcon' ? (
                                        // <span className="icon-moon icon-guitar"></span>
                                        cat.ref === musicSongBuildRef ? (
                                          <div
                                            className={`${subCat.ref} song-build-graph`}
                                          >
                                            <span className="horizontal"></span>
                                            <span className="horizontal"></span>
                                            <span className="horizontal"></span>
                                            <span className="vertical"></span>
                                          </div>
                                        ) : (
                                          <img
                                            alt=""
                                            src={
                                              subCat.icon
                                                ? process.env
                                                    .REACT_APP_S3_IMAGE_URL +
                                                  subCat.icon
                                                : ''
                                            }
                                            className="img-fluid"
                                          />
                                        )
                                      ) : (
                                        ''
                                      )}
                                      <span
                                        className={
                                          subCat.frontEndKeywords &&
                                          subCat.frontEndKeywords.length > 0 &&
                                          getSelectedkeywords(
                                            subCat.frontEndKeywords,
                                            cat._id,
                                          ).length > 0
                                            ? 'text top-align'
                                            : 'text'
                                        }
                                      >
                                        {subCat.name}
                                      </span>
                                    </label>

                                    <div className="multi-selection">
                                      {subCat.frontEndKeywords &&
                                      subCat.frontEndKeywords.length > 0 ? (
                                        <Select
                                          name={subCat.name}
                                          id={subCat._id}
                                          classNamePrefix="react-select"
                                          value={getSelectedkeywords(
                                            subCat.frontEndKeywords,
                                            cat._id,
                                          )}
                                          isMulti={true}
                                          components={{
                                            MenuList,
                                            ValueContainer,
                                            Option,
                                          }}
                                          onChange={val =>
                                            handleChangeKeyword(
                                              val,
                                              subCat,
                                              cat._id,
                                            )
                                          }
                                          getOptionLabel={option => option.name}
                                          getOptionValue={option => option._id}
                                          options={subCat.frontEndKeywords.map(
                                            keyword => {
                                              if (
                                                activeKeywords.length > 0 &&
                                                activeKeywords.indexOf(
                                                  keyword._id,
                                                ) < 0
                                              ) {
                                                keyword.isDisabled = true;
                                              } else {
                                                keyword.isDisabled = false;
                                              }
                                              return keyword;
                                            },
                                          )}
                                          placeholder="MULTI SELECTION"
                                          isClearable={false}
                                          isSearchable={true}
                                          styles={customStyles}
                                        />
                                      ) : (
                                        ''
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Scrollbars>
                      </div>
                    )}
                    {cat.categoryType === 'boolean' && (
                      <div className="icon-btn-filter submixes">
                        <div className="item-container">
                          <div className="item">
                            <input
                              type="radio"
                              className="radio_none"
                              name="submixes"
                              value={true}
                              checked={catSlider[cat._id].value === 'true'}
                              id={'radio_1' + index}
                              onChange={e => {
                                handleRadioButtonChange(e, cat);
                              }}
                            />
                            <label
                              className="radio_lbl"
                              htmlFor={'radio_1' + index}
                            >
                              <span className="icon-moon icon-settings" />
                              <span className="text">Yes</span>
                            </label>
                          </div>
                          <div className="item">
                            <input
                              type="radio"
                              className="radio_none"
                              name="submixes"
                              value={false}
                              checked={catSlider[cat._id].value === 'false'}
                              id={'radio_2' + index}
                              onChange={e => {
                                handleRadioButtonChange(e, cat);
                              }}
                            />
                            <label
                              className="radio_lbl"
                              htmlFor={'radio_2' + index}
                            >
                              <span className="icon-moon icon-settings" />
                              <span className="text">No</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                    {cat.categoryType === 'slider' && (
                      <div className="category-slider-container">
                        <CategorySlider
                          id={cat.name}
                          value={
                            Object.keys(catSlider).length &&
                            catSlider[cat._id].value
                          }
                          onChange={(e, value) =>
                            handleSliderChange(e, value, cat)
                          }
                          onChangeCommitted={(e, value) =>
                            handleSliderChangeFinished(e, value, cat)
                          }
                          valueLabelDisplay="on"
                          aria-labelledby="range-slider"
                          min={cat.slider.min}
                          max={cat.slider.max}
                        />
                      </div>
                    )}
                    {cat.categoryType === 'length' && (
                      <div className="category-slider-container">
                        <CategorySlider
                          id={cat.name}
                          value={
                            Object.keys(catSlider).length &&
                            catSlider[cat._id].value
                          }
                          step={15}
                          onChange={(e, value) =>
                            handleSliderChange(e, value, cat)
                          }
                          onChangeCommitted={(e, value) =>
                            handleSliderChangeFinished(e, value, cat)
                          }
                          valueLabelDisplay="on"
                          aria-labelledby="range-slider"
                          valueLabelFormat={valuetext}
                          min={cat.min}
                          max={cat.max}
                        />
                      </div>
                    )}
                  </Tab>
                );
              })}
          </Tabs>
        </div>
      </div>
    );
  },
);

const mapStateToProps = ({ browseMusic }) => ({
  musicCategories: browseMusic.musicCategories,
  catSlider: browseMusic.catSlider,
  selectedCategories: browseMusic.selectedCategories,
  // musicSongBuildRef: browseMusic.musicSongBuildRef,
  activeCategories: browseMusic.activeCategories,
  selectedParentCats: browseMusic.selectedParentCats,
  activeKeywords: browseMusic.activeKeywords,
});

const mapDispatchToProps = {
  getCategoriesApi: getCategories,
  saveSelectedCategoriesApi: saveSelectedCategories,
  removeSelectedCategoriesApi: removeSelectedCategories,
  setCatSliderApi: setCatSlider,
  saveSelectedKeywordsApi: saveSelectedKeywords,
  saveSelectedParentCatsApi: saveSelectedParentCats,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
