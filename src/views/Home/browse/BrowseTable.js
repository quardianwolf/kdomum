import React, { useState, useEffect, useRef } from "react";
import { Table, Spinner } from "reactstrap";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";
import { Form, Button, Collapse } from "react-bootstrap";
import defaultAudio from "../../../../public/assets/img/default_audio.jpg";

import {
  updateStatus,
  deleteAudioById,
  saveSelectedRows,
} from "./browseMusic.actions";
import AddToPlayList from "../../../components/AddToPlayList";
import { difference } from "lodash";

const BrowseTable = ({
  musicList,
  totalRows,
  activeTab,
  updateStatusApi,
  deleteAudioByIdApi,
  loading,
  fetchBrowseList,
  pageIndex,
  pageSize,
  saveSelectedRowsApi,
  selectedMusic,
  selectedSortByValue,
}) => {
  const scrollRef = useRef(null);

  const [tableData, setTableData] = useState({
    changeStatus: false,
    showModal: false,
    rowData: "",
    confirmationMsg: "",
    showPlayListModal: false,
    showSfxPlayListModal: false,
    musicList: musicList,
    loader: false,
    showEditAudioModal: false,
    showBlogsModal: false,
  });

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [player, setPlayerStatus] = useState({
    selectedId: "",
    selectedS3Key: "",
    showPlayer: false,
  });

  useEffect(() => {
    setSelectedRows([]);
    saveSelectedRowsApi([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
  useEffect(() => {
    setTableData((tableData) => ({
      ...tableData,
      musicList,
    }));
  }, [musicList]);

  useEffect(() => {
    let pageList = [];

    setTableData((tableData) => ({
      ...tableData,
      musicList,
    }));
    tableData.musicList.map((mus) => {
      pageList.push(mus._id);
    });
    if (difference(pageList, selectedMusic).length > 0) {
      setSelectAll(false);
    } else {
      setSelectAll(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(musicList);
  }, [tableData.musicList]);

  useEffect(() => {
    if (selectedMusic.length <= 0) {
      setSelectAll(false);
    }
  }, [selectedMusic]);

  const changeAudioStatus = async () => {
    let ids = [];
    let statusData;
    setTableData((tableData) => ({
      ...tableData,
      loader: true,
    }));
    if (tableData.operationType === "bulk") {
      if (selectedRows.length > 0) {
        selectedRows.map((row) => {
          ids.push(row);
          return row;
        });
      }
      statusData = {
        type: activeTab === "1" ? "music" : "sfx",
        ids: ids,
        isActive: tableData.bulkStatus,
      };
    } else {
      statusData = {
        type: activeTab === "1" ? "music" : "sfx",
        ids: [tableData.rowData._id],
        isActive: !tableData.rowData.isActive,
      };
    }
    await updateStatusApi(statusData, activeTab);
    setTableData((tableData) => ({
      ...tableData,
      showModal: false,
      changeStatus: true,
      operationType: "",
      bulkStatus: "",
      loader: false,
    }));
    setSelectedRows([]);
    saveSelectedRowsApi([]);
  };

  const handleModal = async (
    row,
    _delete,
    status,
    playList,
    operationType,
    bulkStatus,
    blog
  ) => {
    if (_delete) {
      let msg = "Are you sure you want to delete this item?";

      setTableData((tableData) => ({
        ...tableData,
        showModal: true,
        confirmationMsg: msg,
        rowData: row,
        operationType,
      }));
    }
    if (status) {
      let msg = "Are you sure you want to change the status of this item?";

      setTableData((tableData) => ({
        ...tableData,
        showModal: true,
        confirmationMsg: msg,
        changeStatus: true,
        rowData: row,
        operationType,
        bulkStatus,
      }));
    }
    if (operationType === "UpdateAudio") {
      setTableData((tableData) => ({
        ...tableData,
        showEditAudioModal: true,
        rowData: row,
      }));
    }

    if (playList) {
      if (activeTab === "1") {
        setTableData((tableData) => ({
          ...tableData,
          showPlayListModal: true,
          rowData: row,
          operationType,
        }));
      } else {
        setTableData((tableData) => ({
          ...tableData,
          showSfxPlayListModal: true,
          rowData: row,
          operationType,
        }));
      }
    }

    if (blog) {
        setTableData((tableData) => ({
          ...tableData,
          showBlogsModal: true,
          rowData: row,
          operationType,
        }));
    }
  };

  const deleteAudio = async () => {
    let ids = [];
    let data;

    setTableData((tableData) => ({
      ...tableData,
      laoder: true,
    }));
    if (tableData.operationType === "bulk") {
      if (selectedRows.length > 0) {
        selectedRows.map((row) => {
          ids.push(row._id);
          return row;
        });
      }
      data = {
        type: activeTab === "1" ? "music" : "sfx",
        ids: ids,
      };
    } else {
      data = {
        type: activeTab === "1" ? "music" : "sfx",
        ids: [tableData.rowData._id],
      };
    }

    const res = await deleteAudioByIdApi(data);

    if (res) {
      let params = {
        pageIndex: 1,
        pageSize,
      };
      if (tableData.length - 1 > 0) {
        params.pageIndex = pageIndex;
      } else if (data.length - 1 <= 0) {
        params.pageIndex = 1;
      }
      await fetchBrowseList(params);
    }

    setTableData((tableData) => ({
      ...tableData,
      showModal: false,
      loader: false,
    }));
    setSelectedRows([]);
  };

  const handlePageChange = async (page) => {
    let nextPage = page.selected + 1;
    let data = {
      pageIndex: nextPage,
      pageSize,
    };
    await fetchBrowseList(data);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const playAudio = async (id, s3Key) => {
    if (player.selectedId === id) {
      setPlayerStatus({
        showPlayer: false,
      });
    } else {
      console.log(process.env.REACT_APP_S3_URL + "/" + s3Key);
      setPlayerStatus({
        selectedId: id,
        selectedS3Key: s3Key,
        showPlayer: true,
        selectedSrc: process.env.REACT_APP_S3_URL + "/" + s3Key,
      });
    }
  };

  const closePlayer = () => {
    setPlayerStatus({
      selectedId: "",
      selectedS3Key: "",
      showPlayer: false,
    });
  };

  const handleCheckboxChange = async (e, id) => {
    let newArray = [...selectedMusic];
    let pageList = [];
    tableData.musicList.map((mus) => {
      pageList.push(mus._id);
      return mus;
    });
    let musicExist = newArray.indexOf(id);

    if (musicExist < 0) {
      newArray.push(id);
      if (difference(pageList, newArray).length === 0) {
        setSelectAll(true);
      }
      setSelectedRows(newArray);
      await saveSelectedRowsApi(newArray);
    } else {
      let filteredArray = newArray.filter((selectId) => {
        return selectId !== id;
      });

      if (difference(pageList, filteredArray).length === 0) {
        setSelectAll(true);
      }

      setSelectedRows(filteredArray);
      await saveSelectedRowsApi(filteredArray);
    }
  };

  const handleCheckboxAll = async (e) => {
    let pageList = [];
    tableData.musicList.map((mus) => {
      pageList.push(mus._id);
      return mus;
    });

    let newArray = [...selectedMusic];
    if (e.target.checked === true) {
      pageList.map((music) => {
        if (newArray.indexOf(music) < 0) {
          newArray.push(music);
        }
        return music;
      });
      setSelectAll(true);
    } else {
      newArray = difference(newArray - pageList);
      setSelectAll(false);
    }

    setSelectedRows(newArray);

    await saveSelectedRowsApi(newArray);
  };

  const setShowStems = (index) => {
    let musicList = [...tableData.musicList];
    if ("showStems" in musicList[index]) {
      musicList[index].showStems = !musicList[index].showStems;
    } else {
      musicList[index].showStems = true;
    }

    setTableData((tableData) => ({
      ...tableData,
      musicList,
    }));
  };

  const getPopularity = (item) => {
    let popular = 0;
    let downloadCount = 0;
    if (item.download) {
      popular += parseFloat(item.download);
    }
    if (item.played) {
      popular += parseFloat(item.played);
    }
    if (item.subscriptionLicense) {
      downloadCount += parseFloat(item.subscriptionLicense);
    }
    if (item.singleSongLicense) {
      downloadCount += parseFloat(item.singleSongLicense);
    }

    return (
      <p className="popularity-span">
        <span>Download : {downloadCount} </span>
        {item.previewDownload ? (
          <span> Preview Download: {item.previewDownload}</span>
        ) : (
          ""
        )}
        <span> Play : {item.songPlayed}</span>
        <span> Popularity Score : {popular.toFixed(4)} </span>
      </p>
    );
  };

  return (
    <>
      <React.Fragment>
        <div className="d-flex align-items-center py-2" ref={scrollRef}>
          <div className="mt-minus mr-4">Total : {totalRows}</div>
          <div className="mt-minus">
            Selected Music : {selectedMusic.length}
          </div>
          {selectedRows.length > 0 && (
            <div className="btn-grp ml-auto">
              <Button
                onClick={() =>
                  handleModal("", false, true, false, "bulk", true)
                }
                className="btn-black"
              >
                Activate
              </Button>
              <Button
                onClick={() =>
                  handleModal("", false, true, false, "bulk", false)
                }
                className="btn-black"
              >
                Deactivate
              </Button>
              {/* <Button
              onClick={() => handleModal("", true, false, false, "bulk")}
              className="btn-black"
            >
              Delete
            </Button> */}
              <Button
                onClick={() => handleModal("", false, false, true, "bulk")}
                className="btn-black"
              >
                Add To playlist
              </Button>
              <Button
                onClick={() => handleModal("", false, false, false, "bulk", '', true)}
                className="btn-black"
              >
                Add To Blog
              </Button>
            </div>
          )}
        </div>
        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                <th>
                  {tableData.musicList.length > 0 && (
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={(e) => handleCheckboxAll(e)}
                    />
                  )}
                </th>
                <th>Artwork</th>
                <th>Name</th>
                <th>&nbsp;</th>
                <th>Track Title</th>

                {activeTab === "1" && <th>Artist Name</th>}
                <th>Duration</th>
                {selectedSortByValue &&
                selectedSortByValue.value === "popular" ? (
                  <th>Popularity</th>
                ) : (
                  ""
                )}
                <th>Audio Player</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" align="center">
                    <Spinner />
                  </td>
                </tr>
              ) : tableData.musicList.length > 0 ? (
                tableData.musicList.map((music, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td>
                        <Form.Check
                          type="checkbox"
                          onChange={(e) => handleCheckboxChange(e, music._id)}
                          checked={selectedMusic.indexOf(music._id) >= 0}
                        />
                      </td>
                      <td>
                        <img
                          width="50px"
                          alt="artwork"
                          src={
                            music && music.artwork
                              ? process.env.REACT_APP_S3_URL +
                                "/" +
                                music.artwork.s3Key
                              : defaultAudio
                          }
                          className="img-fluid"
                        />
                      </td>
                      <td scope="row">{music.name}</td>
                      <td>
                        {Array.isArray(music.stems) &&
                        music.stems.length > 0 ? (
                          <React.Fragment>
                            <Button
                              className="cnt btn-black btn-song-cnt"
                              onClick={() => setShowStems(index)}
                              aria-controls="example-collapse-text"
                              aria-expanded={music.showStems}
                            >
                              +{music.stems.length}
                            </Button>
                          </React.Fragment>
                        ) : (
                          ""
                        )}
                      </td>
                      <td>{music.trackTitle}</td>

                      {activeTab === "1" && (
                        <td>
                          {music && music.artist
                            ? Array.isArray(music.artist) && music.artist[0]
                              ? music.artist[0].name
                              : music.artist.name
                            : null}
                        </td>
                      )}
                      <td>{music.length}</td>

                      {selectedSortByValue &&
                      selectedSortByValue.value === "popular" ? (
                        <td> {getPopularity(music)} </td>
                      ) : (
                        ""
                      )}
                      <td>
                        <div className="action-column">
                          {music.streamingKey && (
                            <i
                              onClick={() =>
                                playAudio(music._id, music.streamingKey)
                              }
                              className={
                                music._id === player.selectedId
                                  ? `icon-control-pause icons font-1xl`
                                  : `icon-control-play icons font-1xl`
                              }
                            />
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="action-column">
                          <i
                            title={music.isActive ? "Deactivate" : "Activate"}
                            onClick={() =>
                              handleModal(music, false, true, false, "single")
                            }
                            style={{
                              color: `${music.isActive ? "#c5f542" : "red"}`,
                            }}
                            className={`text-ellipsis ${
                              music.isActive
                                ? "cui-lock-unlocked icons font-2xl ml-1"
                                : "cui-lock-locked icons font-2xl ml-1"
                            }`}
                          />

                          <i
                            title="Add to playlist"
                            onClick={() =>
                              handleModal(music, false, false, true, "single")
                            }
                            className="cui-circle-x icons font-20 ml-1 transform-45"
                          />
                          <i
                            title="Add to blogs"
                            onClick={() =>
                              handleModal(music, false, false, false, "single",'',true)
                            }
                            className="text-ellipsis cui-task icons font-20 ml-2"
                          />
                          {activeTab === "1" && (
                            <i
                              title="Update Audio"
                              onClick={() =>
                                handleModal(
                                  music,
                                  false,
                                  false,
                                  false,
                                  "UpdateAudio"
                                )
                              }
                              className="text-ellipsis cui-pencil icons font-20 ml-2"
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                    {music.showStems && (
                      <Collapse in={music.showStems}>
                        <>
                          {Array.isArray(music.stems) &&
                            music.stems.map((item, index) => (
                              <tr className="child-song">
                                <td>&nbsp;</td>
                                <td scope="row">{item.name}</td>
                                <td>&nbsp;</td>
                                <td>{item.trackTitle}</td>
                                <td>&nbsp;</td>
                                <td>
                                  <img
                                    width="50px"
                                    alt="artwork"
                                    src={
                                      item && item.artwork
                                        ? process.env.REACT_APP_S3_URL +
                                          "/" +
                                          item.artwork.s3Key
                                        : defaultAudio
                                    }
                                    className="img-fluid"
                                  />
                                </td>
                                <td>&nbsp;</td>
                                <td>{item.length}</td>
                                <td>
                                  <div className="action-column">
                                    {item.streamingKey && (
                                      <i
                                        onClick={() =>
                                          playAudio(item._id, item.streamingKey)
                                        }
                                        className={
                                          item._id === player.selectedId
                                            ? `icon-control-pause icons font-1xl`
                                            : `icon-control-play icons font-1xl`
                                        }
                                      />
                                    )}
                                  </div>
                                </td>
                                <td>
                                  <div className="action-column">
                                    <i
                                      title={
                                        item.isActive
                                          ? "Deactivate"
                                          : "Activate"
                                      }
                                      onClick={() =>
                                        handleModal(
                                          item,
                                          false,
                                          true,
                                          false,
                                          "single"
                                        )
                                      }
                                      style={{
                                        color: `${
                                          item.isActive ? "#c5f542" : "red"
                                        }`,
                                      }}
                                      className={`text-ellipsis ${
                                        item.isActive
                                          ? "cui-lock-unlocked icons font-2xl ml-1"
                                          : "cui-lock-locked icons font-2xl ml-1"
                                      }`}
                                    />
                                    <i
                                      title="Update Audio File"
                                      onClick={() =>
                                        handleModal(
                                          item,
                                          false,
                                          false,
                                          false,
                                          "UpdateAudio"
                                        )
                                      }
                                      className="text-ellipsis cui-pencil icons font-20 ml-2"
                                    />
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </>
                      </Collapse>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="7" align="center">
                    {" "}
                    No music found{" "}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        {totalRows > 0 ? (
          <div className="pagination">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={Math.ceil(totalRows / pageSize)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={(currentPage) => {
                handlePageChange(currentPage);
              }}
              containerClassName={""}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        ) : (
          ""
        )}
        <ConfirmationPopUp
          onOpen={tableData.showModal}
          onConfirm={tableData.changeStatus ? changeAudioStatus : deleteAudio}
          message={tableData.confirmationMsg}
          toggle={() =>
            setTableData((tableData) => ({
              ...tableData,
              showModal: !tableData.showModal,
            }))
          }
          loading={tableData.loader}
        />
        {tableData.showPlayListModal ? (
          <AddToPlayList
            showModal={tableData.showPlayListModal}
            activeTab={activeTab}
            tableData={tableData}
            selectedRows={selectedRows}
            closeAddToPlayListModal={() =>
              setTableData((tableData) => ({
                ...tableData,
                showPlayListModal: !tableData.showPlayListModal,
              }))
            }
          />
        ) : null}

        {tableData.showSfxPlayListModal ? (
          <AddToSfxPlaylist
            showModal={tableData.showSfxPlayListModal}
            activeTab={activeTab}
            tableData={tableData}
            selectedRows={selectedRows}
            closeAddToPlayListModal={() =>
              setTableData((tableData) => ({
                ...tableData,
                showSfxPlayListModal: !tableData.showSfxPlayListModal,
              }))
            }
          />
        ) : null}

        {tableData.showEditAudioModal ? (
          <EditAudioFile
            showModal={tableData.showEditAudioModal}
            tableData={tableData}
            closeEditAudioFileModal={() =>
              setTableData((tableData) => ({
                ...tableData,
                showEditAudioModal: !tableData.showEditAudioModal,
              }))
            }
          />
        ) : null}

        {tableData.showBlogsModal ? (
          <AddToBlog
            showModal={tableData.showBlogsModal}
            activeTab={activeTab}
            tableData={tableData}
            selectedRows={selectedRows}
            closeAddToBlogModal={() =>
              setTableData((tableData) => ({
                ...tableData,
                showBlogsModal: !tableData.showBlogsModal,
              }))
            }
          />
        ) : null}

        {player.showPlayer && (
          <div className="audio-outer">
            <audio src={player.selectedSrc} autoPlay controls />
            <button className="btn btn-close-audio" onClick={closePlayer}>
              <i className="fa fa-close fa-22"></i>
            </button>
          </div>
        )}
      </React.Fragment>
    </>
  );
};

const mapStateToProps = ({ browseMusic, browseSfx }, props) => {
  return {
    musicList:
      props.activeTab === "2" ? browseSfx.musicList : browseMusic.musicList,
    totalRows:
      props.activeTab === "2" ? browseSfx.totalRows : browseMusic.totalRows,
    selectedMusic: browseMusic.selectedMusic,
  };
};

const mapDispatchToProps = {
  updateStatusApi: updateStatus,
  deleteAudioByIdApi: deleteAudioById,
  saveSelectedRowsApi: saveSelectedRows,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BrowseTable));
