import { API } from '../../../components/Constant/api.constants';
import { apiClient, composeUrl } from '../../../components/Constant/api.services';

export const getCategories = async (type) => {
    return apiClient.get(composeUrl(API.BROWSE.CATEGORIES + type));
};

export const getParentCategories = async (type) => {
    return apiClient.get(composeUrl(API.BROWSE.PARENT_CATS));
};

export const getMusicList = async (payload) => {
    return apiClient.post(composeUrl(API.BROWSE.MUSIC), payload);
};

export const searchKeywords = async (payload) => {
    return apiClient.post(composeUrl(API.BROWSE.SEARCH_KEYWORD), payload);
};

export const getSfxList = async (payload) => {
    return apiClient.post(composeUrl(API.BROWSE.SFX), payload);
};

export const searchSfxKeywords = async (payload) => {
    return apiClient.post(composeUrl(API.BROWSE.SEARCH_SFX_KEYWORD), payload);
};
export const getSelectedMusicList = async (payload) => {
    return apiClient.post(composeUrl(API.BROWSE.SELECTED_MUSIC + payload.keyword), payload);
};
export const getSelectedSfxList = async (payload) => {
    return apiClient.post(composeUrl(API.BROWSE.SELECTED_SFX + payload.keyword), payload);
};

export const filterCategory = async (payload) => {
    return apiClient.post(composeUrl(API.BROWSE.FILTER_CATEGORY), payload);
};

export const filterSfxRelatedCategory = async (payload) => {
    return apiClient.post(composeUrl(API.BROWSE.FILTER_SFXCATEGORY), payload);
};
export const getSfxParamKeywordsData = async (payload, type) => {
    console.log("'ttt",type)
    return apiClient.post(composeUrl(API.BROWSE.SEARCH_SFX_PARAMS + `?type=${type}`), payload);
};
