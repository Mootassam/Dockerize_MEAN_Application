import authAxios from 'src/app/shared/axios/auth-axios';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';

export class MemberApi {


static async Open() {

  const tenantId = AuthCurrentTenant.get();
  const response = await authAxios.get(
  `/tenant/${tenantId}/testimony/open`
  );
  return response.data
}

static async closed() {

  const tenantId = AuthCurrentTenant.get();
  const response = await authAxios.get(
  `/tenant/${tenantId}/testimony/closed`
  );
  return response.data
}

static async watting() {

  const tenantId = AuthCurrentTenant.get();
  const response = await authAxios.get(
  `/tenant/${tenantId}/testimony/waitting`
  );
  return response.data
}

static async Notificationswatting() {

  const tenantId = AuthCurrentTenant.get();
  const response = await authAxios.get(
  `/tenant/${tenantId}/notification/waiting`
  );
  return response.data
}


static async NotificationsClosed() {

  const tenantId = AuthCurrentTenant.get();
  const response = await authAxios.get(
  `/tenant/${tenantId}/notification/closed`
  );
  return response.data
}


}
