import authAxios from 'src/app/shared/axios/auth-axios';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';

export class TestimonyApi {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/testimony/${id}`,
      body,
    );

    return response.data;
  }
  static async _asRead(id) {
    const body = {
      id,
      };
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.put(
      `/tenant/${tenantId}/asread/${id}`,
      body,
    );
    return response.data;
  }

  static async _ReadALl() {
    
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.put(
      `/tenant/${tenantId}/asAllRead/`,
  
    );
    return response.data;
  }


  static async _DeleteALl() {
    
    const tenantId = AuthCurrentTenant.get();
    const response = await authAxios.put(
      `/tenant/${tenantId}/deleteALl/`,
  
    );
    return response.data;
  }


  static async updatefromdasboard(id) {
    const body = {
      id,
      };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/update/${id}`,
      body,
    );
    return response.data;
  }

  static async updateActivityToTestimony(id, data) {
    const body = {
      id,
      data,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.put(
      `/tenant/${tenantId}/testimonyUpdateActivity/${id}`,
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
      `/tenant/${tenantId}/testimony`,
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
      `/tenant/${tenantId}/testimony`,
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
      `/tenant/${tenantId}/testimony/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/testimony/${id}`,
    );

    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/testimony`,
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
      `/tenant/${tenantId}/testimony/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }
}
