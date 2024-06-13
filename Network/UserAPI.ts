// UserAPI.ts
import { BaseResponseModel } from '@/Model/ResponseModel';
import RequestManager from './RequestManager';

interface LoginData {
    token?: string
    user?: string
    role?: string
  // Define the structure for your LoginData here
}

// interface BaseResponseModel {
//   // Define the structure for your BaseResponseModel here
// }

interface DataResponseModel<T> {
  data: T;
}

interface Information {
  // Define the structure for your Information here
}

interface InitData {
  // Define the structure for your InitData here
}

interface Audio {
  // Define the structure for your Audio here
}

interface TaskData {
  // Define the structure for your TaskData here
}

interface HistoryParam {
  // Define the structure for your HistoryParam here
}

interface ReportParam {
  // Define the structure for your ReportParam here
}

interface ReportTroubleParam {
  // Define the structure for your ReportTroubleParam here
}

interface ReportConfirmParam {
  // Define the structure for your ReportConfirmParam here
}

interface HistoryResponse {
  // Define the structure for your HistoryResponse here
}

interface NearestSewerPipe {
  // Define the structure for your NearestSewerPipe here
}

const UserAPI = {
  requestLogin: async () => {
    return await RequestManager.request({
      method: 'GET',
      url: '/photos',
    });
  },

  requestLogout: async () => {
    return await RequestManager.request({
      method: 'GET',
      url: '/api/account/logout',
    });
  },

  requestUserInfo: async () => {
    return await RequestManager.request<DataResponseModel<Information>>({
      method: 'GET',
      url: '/api/home/information',
    });
  },

  requestInitInfo: async () => {
    return await RequestManager.request<DataResponseModel<InitData>>({
      method: 'GET',
      url: '/api/init',
    });
  },

  requestAddFCM: async (deviceToken: string, deviceId: number) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/fcm/AddFCM',
      data: { deviceToken, deviceId },
    });
  },

  requestChangePassword: async (oldPassword: string, newPassword: string) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/account/ChangePassword',
      data: { oldPassword, newPassword },
    });
  },

  requestSetLocation: async (lat: string, lng: string) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/Account/SetLocation',
      data: { lat, lng },
    });
  },

  requestAudios: async () => {
    return await RequestManager.request<DataResponseModel<Audio[]>>({
      method: 'GET',
      url: '/api/audio/all',
    });
  },

  requestTasks: async (pageIndex: number, startDate?: string, staffId?: string, type?: string) => {
    return await RequestManager.request<DataResponseModel<TaskData[]>>({
      method: 'GET',
      url: '/api/task/Tasks',
      params: { PageIndex: pageIndex, StartDate: startDate, StaffId: staffId, Type: type },
    });
  },

  requestTaskDetail: async (pageIndex: number, taskId: string) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'GET',
      url: '/api/task/TaskDetail',
      params: { PageIndex: pageIndex, TaskId: taskId },
    });
  },

  requestTaskDone: async (taskId: number) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/task/done',
      data: { taskId },
    });
  },

  requestTroubles: async (data: HistoryParam) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/task/Troubles',
      data,
    });
  },

  requestSOS: async (lat: string, lng: string) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/notification/SOS',
      data: { Lat: lat, Lng: lng },
    });
  },

  requestReportHistories: async (data: HistoryParam) => {
    return await RequestManager.request<DataResponseModel<HistoryResponse>>({
      method: 'POST',
      url: '/api/report/Histories',
      data,
    });
  },

  requestReport: async (data: ReportParam) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/report/Report',
      data,
    });
  },

  requestReportTrouble: async (data: ReportTroubleParam) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/report/ReportTrouble',
      data,
    });
  },

  requestReportConfirm: async (data: ReportConfirmParam) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'POST',
      url: '/api/report/reportconfirm',
      data,
    });
  },

  requestSearchSewerPipe: async (streetId: string, search: string, length: string, taskId: string) => {
    return await RequestManager.request<BaseResponseModel>({
      method: 'GET',
      url: '/api/sewer-pipe/search',
      params: { streetid: streetId, search, length, taskid: taskId },
    });
  },

  requestNearestSewerPipe: async (lat: string, lng: string) => {
    return await RequestManager.request<DataResponseModel<NearestSewerPipe>>({
      method: 'GET',
      url: '/api/task/SewerPipeNearest',
      params: { lat, lng },
    });
  },
};

export default UserAPI;
