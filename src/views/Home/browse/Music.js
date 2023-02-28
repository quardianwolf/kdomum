import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Row, Col, Button, Input } from "reactstrap";
import Select from "react-select";
import {
  getBrowseList,
  clearSelectedCategories,
} from "./browseMusic.actions";
import BrowseTable from "./BrowseTable";
import CategoryFilter from "./CategoryFilter";
import KeywordSearch from "./KeywordSearch";
import { useLocation } from "next/router";

const Music = ({
  selectedCategories,
  clearSelectedCategoriesApi,
  //   filterRelatedCategory,
  artistList,
  listArtistApi,
  getBrowseListApi,
  activeTab,
}) => {
  const didMountRef = useRef(false);
  //   const [showMobileFilter, setMobileFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  let data = location.state;
  const [state, setState] = useState({
    pageIndex: 1,
    pageSize: 30,
    artistOptions: [],
    statusOptions: [
      { label: "Active", value: true },
      { label: "In-Active", value: false },
    ],
    sortOptions: [
      { label: "Most Popular", value: "popular" },
      { label: "Recently Added", value: "recent" },
    ],
    search: data
      ? data.musicId.primaryTrack
        ? data.musicId.primaryTrack.trackTitle
        : data.musicId.trackTitle
      : "",
    selectedSortBy: null,
    selectedStatus: null,
    selectedArtist: data?.artistId._id || null,
    selectedArtistValue:
      data?.artistId.name && data?.artistId._id
        ? { label: data.artistId.name, value: data.artistId._id }
        : null,
    selectedStatusValue: null,
    selectedSortByValue: null,
    activeTab: activeTab,
  });

  useEffect(() => {
    listArtistApi({ isAllRecords: true });
  }, [listArtistApi]);

  useEffect(() => {
    const artistListOptions = artistList.map((_val) => {
      return { label: _val.name, value: _val._id };
    });
    setState({ ...state, artistOptions: artistListOptions });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistList]);

  useEffect(() => {
    return () => {
      clearSelectedCategoriesApi();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchBrowseList = async () => {
      const payload = {
        pageIndex: 1,
        pageSize: 30,
        status: null,
        artist: data?.artistId._id || null,
        sortBy: null,
        search: data
          ? data.musicId.primaryTrack
            ? data.musicId.primaryTrack.trackTitle
            : data.musicId.trackTitle
          : null,
      };
      setLoading(true);
      let res = await getBrowseListApi(payload);
      didMountRef.current = true;
      if (res) {
        setLoading(false);
      }
    };
    fetchBrowseList();
  }, [getBrowseListApi]);

  useEffect(() => {
    if (didMountRef.current) {
      setState((state) => ({
        ...state,
        pageIndex: 1,
      }));
      const params = {
        pageIndex: 1,
        pageSize: state.pageSize,
        search: state.search,
        status: state.selectedStatus,
        artist: state.selectedArtist,
        sortBy: state.selectedSortBy,
        category: selectedCategories,
      };
      getBrowseListApi(params);
      // filterRelatedCategory({ category: selectedCategories });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories]);

  const handleInputChange = async (event) => {
    event.persist();
    setState((state) => ({
      ...state,
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
      category: selectedCategories,
    };
    setLoading(true);
    let res = await getBrowseListApi(payload);
    if (res) {
      setLoading(false);
    }
  };

  const handleChangeArtist = async (artist) => {
    setState((state) => ({
      ...state,
      pageIndex: 1,
      selectedArtistValue: artist,
      selectedArtist: artist ? artist.value : null,
    }));
    let params = {
      pageIndex: 1,
      search: state.search,
      pageSize: state.pageSize,
      status: state.selectedStatus,
      artist: artist ? artist.value : null,
      sortBy: state.selectedSortBy,
      category: selectedCategories,
    };

    setLoading(true);
    let res = await getBrowseListApi(params);
    if (res) {
      setLoading(false);
    }
  };

  const handleChangeStatus = async (status) => {
    setState((state) => ({
      ...state,
      selectedStatusValue: status,
      selectedStatus: status ? status.value : null,
      pageIndex: 1,
    }));
    let params = {
      pageIndex: 1,
      pageSize: state.pageSize,
      search: state.search,
      status: status ? status.value : null,
      artist: state.selectedArtist,
      sortBy: state.selectedSortBy,
      category: selectedCategories,
    };
    setLoading(true);
    let res = await getBrowseListApi(params);
    if (res) {
      setLoading(false);
    }
  };

  const handleChangeSortBy = async (sortBy) => {
    setState((state) => ({
      ...state,
      selectedSortByValue: sortBy,
      selectedSortBy: sortBy ? sortBy.value : null,
      pageIndex: 1,
    }));
    let params = {
      pageIndex: 1,
      pageSize: state.pageSize,
      search: state.search,
      status: state.selectedStatus,
      artist: state.selectedArtist,
      sortBy: sortBy ? sortBy.value : null,
      category: selectedCategories,
    };
    setLoading(true);
    let res = await getBrowseListApi(params);
    if (res) {
      setLoading(false);
    }
  };

  const handleViewAll = async () => {
    // let listObject = {
    //   pageIndex: 1,
    //   pageSize: state.pageSize,
    //   type: 'music',
    // };
    setLoading(true);
    setState((state) => ({
      ...state,
      search: "",
      selectedSortBy: null,
      selectedStatus: null,
      selectedArtist: null,
      selectedArtistValue: null,
      selectedStatusValue: null,
      selectedSortByValue: null,
    }));

    await clearSelectedCategoriesApi();
    setLoading(false);
    // setLoading(true);
    // let res = await getBrowseListApi(listObject);
    // // if (res) {
    // setLoading(false);
    // }
  };

  const fetchBrowseList = async (data) => {
    let params = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      search: state.search,
      status: state.selectedStatus,
      artist: state.selectedArtist || null,
      sortBy: state.selectedSortBy,
      category: selectedCategories,
    };
    setLoading(true);
    let res = await getBrowseListApi(params);
    if (res) {
      setLoading(false);
      setState((state) => ({
        ...state,
        pageIndex: data.pageIndex,
        pageSize: data.pageSize,
      }));
    }
  };

  const showLoading = async (value) => {
    setLoading(value);
  };

  return (
    <React.Fragment>
      <Row>
        <Col className="my-1 pr-md-0" md={4} xl={2}>
          <Select
            options={state.artistOptions}
            isClearable={true}
            value={state.selectedArtistValue}
            onChange={handleChangeArtist}
            name="artist"
            className="custon-select-control"
            placeholder="Select Artist"
          />
        </Col>
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
            onKeyPress={(e) => (e.key === "Enter" ? handleSearch() : null)}
            name="search"
          />
        </Col>
        <Col className="my-1" md={4} xl={2} style={{ paddingLeft: "0" }}>
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

      <KeywordSearch showLoading={showLoading} />
      <hr />
      <CategoryFilter showLoading={showLoading} />
      <hr />
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

function mapStateToProps({ browseMusic, artist }) {
  let sortedArtist = artist.artistList.sort(function (a, b) {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  return {
    selectedCategories: browseMusic.selectedCategories,
    artistList: sortedArtist,
  };
}

const mapDispatchToProps = {
  getBrowseListApi: getBrowseList,
  clearSelectedCategoriesApi: clearSelectedCategories,

};

export default connect(mapStateToProps, mapDispatchToProps)(Music);
