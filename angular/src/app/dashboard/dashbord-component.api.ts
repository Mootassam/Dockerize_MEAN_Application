import authAxios from 'src/app/shared/axios/auth-axios';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';

export class DashbordComponentApi {

                    static async findByStatus() {
                    const tenantId = AuthCurrentTenant.get();
                    const response = await authAxios.get(
                    `/tenant/${tenantId}/satestique/status/`
                    );
                    return response.data;
                    }

                    static async findByCategory() {
                    const tenantId = AuthCurrentTenant.get();
                    const response = await authAxios.get(
                    `/tenant/${tenantId}/satestique/category/`
                    );
                    return response.data;
                    }

                    static async findByRegion() {
                    const tenantId = AuthCurrentTenant.get();
                    const response = await authAxios.get(
                    `/tenant/${tenantId}/satestique/region/`
                    );
                    return response.data;
                    }

                    static async findByAnonymous() {

                    const tenantId = AuthCurrentTenant.get();
                    const response = await authAxios.get(
                    `/tenant/${tenantId}/satestique/anonymous/`
                    );
                    return response.data;
                    }

                    static async findByTransfere() {
                    const tenantId = AuthCurrentTenant.get();
                    const response = await authAxios.get(
                    `/tenant/${tenantId}/satestique/transferer/`
                    );
                    return response.data;
                    }


                    static async findByPartenar () {
                    const tenantId = AuthCurrentTenant.get();
                    const response = await authAxios.get(
                    `/tenant/${tenantId}/satestique/partenar/`
                    );
                    return response.data;
                    }


                    static async MemberCategory () {
                    const tenantId = AuthCurrentTenant.get();
                    const response = await authAxios.get(
                    `/tenant/${tenantId}/satestique/member/category`
                    );
                    return response.data;
                    }

                    static async MemberStatus () {
                    const tenantId = AuthCurrentTenant.get();
                    const response = await authAxios.get(
                    `/tenant/${tenantId}/satestique/member/status`
                    );
                    return response.data;
                    }

                   


}
