import * as BrowseService from './browse.service';
import { customeContenttoaster } from '../../../components/toaster';

export const getSfxList = data => async dispatch => {
  try {
    const res = await BrowseService.getSfxList(data);
    dispatch({
      type: browseSfx.GET_ALL_SFX_SUCCESS,
      payload: res,
    });
    return res;
  } catch (err) {
    customeContenttoaster(err.message, 'danger');
  }
};

export const getSfxCategories = () => async dispatch => {
  try {
    const res = await BrowseService.getCategories('sfx');
    dispatch({
      type: browseSfx.SFX_CATEGORIES,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: browseSfx.SFX_CATEGORIES,
      payload: [],
    });
  }
};

export const getSfxPlayList = () => async dispatch => {
  try {
    const res = await BrowseService.getSfxPlayList();
    dispatch({
      type: browseSfx.GET_SFX_PLAYLIST,
      payload: res,
    });
    return res;
  } catch (err) {
    customeContenttoaster(err.message, 'danger');
  }
};
export const searchSfxKeyword = payload => async dispatch => {
  try {
    const res = await BrowseService.searchSfxKeyword(payload);
    return res;
  } catch (err) {
    return [];
  }
};
