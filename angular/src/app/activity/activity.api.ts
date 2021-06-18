import authAxios from 'src/app/shared/axios/auth-axios';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';

export class ActivityApi {
  
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/activity/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.delete(
      `/tenant/${tenantId}/activity`,
      {
        params,
      },
    );

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/activity`,
      body,
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.post(
      `/tenant/${tenantId}/activity/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/activity/${id}`,
    );

    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {

    const testimonyId = localStorage.getItem('testimonyId');

    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    // const response = await authAxios.get(
    //   `/tenant/${tenantId}/activity`,
    //   {
    //     params,
    //   },
    // );

    const response = await authAxios.get(
      `/tenant/${tenantId}/testimonyGetActivities/${testimonyId}/`,
      {
        params,
      },
    );
    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/activity/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }
}
