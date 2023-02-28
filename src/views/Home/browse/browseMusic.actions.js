import { browseMusic } from "./browseMusic.types";
import * as BrowseService from "./browse.service";
import { customeContenttoaster } from "../../../components/Toaster";


export const getBrowseList = (data) => async (dispatch) => {
  try {
    const res = await BrowseService.getMusicList(data);
    dispatch({
      type: browseMusic.GET_ALL_MUSIC_SUCCESS,
      payload: res,
    });
    return res;
  } catch (err) {
    customeContenttoaster(err.message, "danger");
  }
};

export const getCategories = (type) => async (dispatch) => {
  try {
    const res = await BrowseService.getCategories(type);
    dispatch({
      type: browseMusic.MUSIC_CATEGORIES,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: browseMusic.MUSIC_CATEGORIES,
      payload: [],
    });
  }
};

export const updateStatus = (data, type) => async (dispatch) => {
  try {
    const res = await BrowseService.updateStatus(data);
    dispatch({
      type:
        type === "1"
          ? browseMusic.UPDATE_STATUS_SUCCESS
          : browseSfx.UPDATE_SFX_STATUS_SUCCESS,
      data,
    });
    customeContenttoaster(res.message, "success");
  } catch (err) {
    customeContenttoaster(err.message, "danger");
  }
};

export const deleteAudioById = (data) => async (dispatch) => {
  try {
    const res = await BrowseService.deleteAudioById(data);
    customeContenttoaster(res.message, "success");
    return res;
  } catch (err) {
    customeContenttoaster(err.message, "danger");
  }
};

export const addToPlaylist = (data) => async (dispatch) => {
  try {
    const res = await BrowseService.addToPlaylist(data);
    dispatch({
      type: browseMusic.ADD_TO_PLAYLIST,
      data,
    });
    customeContenttoaster(res.message, "success");
    return res;
  } catch (err) {
    customeContenttoaster(err.message, "danger");
  }
};

export const searchKeywords = (payload) => async (dispatch) => {
  try {
    const res = await BrowseService.searchKeywords(payload);
    return res;
  } catch (err) {
    return [];
  }
};

export const saveSelectedRows = (data) => async (dispatch) => {
  try {
    dispatch({
      type: browseMusic.SAVE_SELECTED_ROWS,
      payload: data,
    });
  } catch (err) {
    customeContenttoaster(err.message, "danger");
  }
};

export const setCatSlider = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: browseMusic.CAT_SLIDER,
      payload: payload,
    });
  } catch (err) {
    return [];
  }
};

export const saveSelectedCategories = (payload, type) => async (dispatch) => {
  try {
    if (type === "keyword") {
      dispatch({
        type: browseMusic.SELECTED_SUGGETION,
        payload: { ...payload },
      });
    } else {
      dispatch({
        type: browseMusic.SELECTED_CATEGORIES,
        payload: { ...payload },
      });
    }
  } catch (err) {
    return [];
  }
};

export const saveSelectedKeywords = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: browseMusic.SELECTED_KEYWORDS,
      payload: { ...payload },
    });
  } catch (err) {
    return [];
  }
};

export const saveSelectedParentCats = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: browseMusic.SELECTED_PARENT_CATS,
      payload: { ...payload },
    });
  } catch (err) {
    return [];
  }
};

export const removeSelectedCategories = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: browseMusic.REMOVE_SELECTED_CATEGORIES,
      payload,
    });
  } catch (err) {
    return [];
  }
};

export const clearSelectedCategories = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: browseMusic.CLEAR_SELECTED_CATEGORIES,
    });
  } catch (err) {
    return [];
  }
};

export const uploadUpdateMusicFile = (payload) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      let s3Keys = [];
      let audioId = payload.audioId;
      getDuration(payload.file).then((payload) => {
        uploadAudio(payload, dispatch).then(async function (s3Key) {
          let s3Objects = {
            name: payload.name,
            s3Key: s3Key.Key,
            size: payload.size,
            length: payload.duration,
          };
          s3Keys.push(s3Objects);
          let res;
          let audioData = s3Keys;
          if (audioId) {
            res = await BrowseService.updateAudioMainVersion(audioData, audioId);
            dispatch({
              type: browseMusic.UPDATE_AUDIO,
              payload: res.doc,
            });
            customeContenttoaster(res.message, "success");
          }
          resolve(res);
        });
      });
    } catch (err) {
      customeContenttoaster(err.message, "danger");
      reject();
    }
  });
};

const uploadAudio = (audio, dispatch) => {
  return new Promise(async (res, rej) => {
    try {
      let s3Key = await dispatch(audioUpload(audio));
      res(s3Key);
    } catch (err) {
      rej(err);
    }
  });
};

export const uploadAlternativeFiles =
  (payload, keyType) => async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        let audioId = payload.audioId;
        payload.file._id = payload.audioId;
        payload.file.keyType = keyType;
        uploadOtherFormats(payload, dispatch).then(async function (s3Key) {
          const reqParams = {
            s3Key: s3Key.Key,
            keyType: keyType,
          };
          let res = await BrowseService.updateAlternateVersion(
            reqParams,
            audioId
          );
          dispatch({
            type: browseMusic.UPDATE_ALTERNATE_AUDIO_VERSION,
            payload: res.doc,
          });
          customeContenttoaster(res.message, "success");
          resolve(res);
        });
      } catch (err) {
        customeContenttoaster(err.message, "danger");
        reject();
      }
    });
  };

const uploadOtherFormats = (audio, dispatch) => {
  return new Promise(async (res, rej) => {
    try {
      let s3Key = await dispatch(alternativeVerisonUpload(audio.file));
      res(s3Key);
    } catch (err) {
      rej(err);
    }
  });
};

export const addToBlog = (data) => async (dispatch) => {
  try {
    const res = await BrowseService.addToBlog(data);
    dispatch({
      type: browseMusic.ADD_TO_BLOG,
      data,
    });
    customeContenttoaster(res.message, "success");
    return res;
  } catch (err) {
    customeContenttoaster(err.message, "danger");
  }
};