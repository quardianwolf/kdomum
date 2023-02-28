import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Input } from 'reactstrap';
import Select from 'react-select';
import { getSfxList } from './browseSfx.actions';
import BrowseTable from './BrowseTable';
import KeywordSearch from './KeywordSearch';
const Sfx = ({ getSfxListApi, activeTab }) => {
  const didMountRef = useRef(false);
  const [loading, setLoading] = useState(false);
  // let [seletedCats, setSelectedCats] = useState([]);
  let [seletedcategory, setSeletedcategory] = useState([]);
  const [state, setState] = useState({
    pageIndex: 1,
    pageSize: 30,
    artistOptions: [],
    statusOptions: [
      { label: 'Active', value: true },
      { label: 'In-Active', value: false },
    ],
    sortOptions: [
      { label: 'Most Popular', value: 'popular' },
      { label: 'Recently Added', value: 'recent' },
    ],
    search: '',
    selectedSortBy: null,
    selectedStatus: null,
    selectedStatusValue: null,
    selectedSortByValue: null,
    activeTab: activeTab,
    // category: [],
  });

  useEffect(() => {
    const fetchBrowseList = async () => {
      const payload = {
        pageIndex: 1,
        pageSize: 30,
        status: null,
        artist: null,
        sortBy: null,
      };
      setLoading(true);
      let res = await getSfxListApi(payload);
      didMountRef.current = true;
      if (res) {
        setLoading(false);
      }
    };
    fetchBrowseList();
  }, [getSfxListApi]);

  const handleInputChange = async (event) => {
    event.persist();
    setState((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearch = async (e) => {
    const payload = {
      pageIndex: 1,
      pageSize: state.pageSize,
      search: state.search,
      status: state.selectedStatus,
      artist: state.selectedArtist,
      sortBy: state.selectedSortBy,
      category: seletedcategory,
    };
    setLoading(true);
    let res = await getSfxListApi(payload);
    if (res) {
      setLoading(false);
    }
  };

  const handleChangeStatus = async (status) => {
    setState({
      ...state,
      selectedStatusValue: status,
      selectedStatus: status ? status.value : null,
      pageIndex: 1,
    });

    let params = {
      pageIndex: 1,
      pageSize: state.pageSize,
      search: state.search,
      status: status ? status.value : null,
      artist: state.selectedArtist,
      sortBy: state.selectedSortBy,
      category: seletedcategory,
    };
    setLoading(true);
    let res = await getSfxListApi(params);
    if (res) {
      setLoading(false);
    }
  };

  const handleChangeSortBy = async (sortBy) => {
    setState({
      ...state,
      selectedSortByValue: sortBy,
      selectedSortBy: sortBy ? sortBy.value : null,
      pageIndex: 1,
    });
    let params = {
      pageIndex: 1,
      pageSize: state.pageSize,
      search: state.search,
      status: state.selectedStatus,
      artist: state.selectedArtist,
      sortBy: sortBy ? sortBy.value : null,
      category: seletedcategory,
    };
    setLoading(true);
    let res = await getSfxListApi(params);
    if (res) {
      setLoading(false);
    }
  };

  const handleViewAll = async () => {
    let listArtistrObject = {
      pageIndex: 1,
      pageSize: state.pageSize,
    };
    setState({
      ...state,
      search: '',
      selectedSortBy: null,
      selectedStatus: null,
      selectedArtist: null,
      selectedArtistValue: null,
      selectedStatusValue: null,
      selectedSortByValue: null,
    });
    // setSelectedCats([]);
    setSeletedcategory([]);
    setLoading(true);
    await getSfxListApi(listArtistrObject);
    setLoading(false);
  };

  const fetchBrowseList = async (data) => {
    let params = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      search: state.search,
      status: state.selectedStatus,
      artist: state.selectedArtist || null,
      sortBy: state.selectedSortBy,
      category: seletedcategory,
    };
    setLoading(true);
    let res = await getSfxListApi(params);
    if (res) {
      setLoading(false);

      setState({
        ...state,
        pageIndex: data.pageIndex,
        pageSize: data.pageSize,
      });
    }
  };

  const handleTagSelection = async (selectedCat) => {
    let tagPosition;
    let newCategory = [...seletedcategory];
    let selected = newCategory.filter((cat, index) => {
      if (cat._id === selectedCat._id) {
        tagPosition = index;
        return cat;
      }else{
        return null;
      }
    });
    if (selected && selected.length) {
      newCategory.splice(tagPosition, 1);
    } else {
      newCategory.push(selectedCat);
    }
    setSeletedcategory(newCategory);
    setLoading(true);
    const params = {
      pageIndex: 1,
      pageSize: state.pageSize,
      search: state.search,
      status: state.selectedStatus,
      artist: state.selectedArtist,
      sortBy: state.selectedSortBy,
      category: newCategory,
    };
    let res = await getSfxListApi(params);
    if (res) setLoading(false);
  };

  // const removeSelectedTag = async tag => {
  //   let newCategory = [...seletedcategory];
  //   let tagPosition;
  //   newCategory.filter((cat, index) => {
  //     if (cat._id === tag._id) {
  //       tagPosition = index;
  //     }
  //   });
  //   newCategory.splice(tagPosition, 1);

  //   setSeletedcategory(newCategory);
  //   const params = {
  //     pageIndex: 1,
  //     pageSize: state.pageSize,
  //     search: state.search,
  //     status: state.selectedStatus,
  //     artist: state.selectedArtist,
  //     sortBy: state.selectedSortBy,
  //     category: newCategory,
  //   };

  //   await getSfxListApi(params);
  // };
  return (
    <React.Fragment>
      <Row>
        <Col className="my-1 pr-md-0" md={4} xl={2}>
          <Select
            options={state.statusOptions}
            isClearable={true}
            value={state.selectedStatusValue}
            onChange={handleChangeStatus}
            name="status"
            className="custon-select-control"
            placeholder="Select Status"
          />
        </Col>
        <Col className="my-1" md={4} xl={2}>
          <Select
            options={state.sortOptions}
            isClearable={true}
            value={state.selectedSortByValue}
            onChange={handleChangeSortBy}
            name="status"
            className="custon-select-control"
            placeholder="Sort By"
          />
        </Col>
        <Col className="my-1 pr-md-0" md={8} xl={4}>
          <Input
            type="text"
            className="custom-input"
            placeholder="Search by Track title"
            autoComplete="new-password"
            value={state.search}
            onChange={handleInputChange}
            onKeyPress={(e) => (e.key === 'Enter' ? handleSearch() : null)}
            name="search"
          />
        </Col>
        <Col className="my-1" md={4} xl={2} style={{ paddingLeft: '0' }}>
          <div className="btn-grp">
            <Button onClick={handleSearch} className="btn-yellow">
              Search
            </Button>
            <Button onClick={handleViewAll} className="btn-yellow">
              View All
            </Button>
          </div>
        </Col>
      </Row>
      <hr />
      <KeywordSearch
        handleTagSelection={handleTagSelection}
        seletedcategory={seletedcategory}
      />

      <Row>
        <Col lg="12">
          <BrowseTable
            pageSize={state.pageSize}
            pageIndex={state.pageIndex}
            fetchBrowseList={fetchBrowseList}
            activeTab={state.activeTab}
            loading={loading}
            selectedSortByValue={state.selectedSortByValue}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

// function mapStateToProps({ browseMusic, browseSfx }) {
//   return {
//     seletedCats: browseMusic.seletedCats,
//   };
// }

const mapDispatchToProps = {
  getSfxListApi: getSfxList,
  // clearSelectedCategories,
  //   filterRelatedCategory,
  //   unMOUnt,
  // listArtist,
};

export default connect(null, mapDispatchToProps)(Sfx);
