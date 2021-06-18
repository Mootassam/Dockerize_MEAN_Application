import authAxios from 'src/app/shared/axios/auth-axios';
import { AuthToken } from 'src/app/auth/auth-token';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';
import AuthInvitationToken from 'src/app/auth/auth-invitation-token';
import { tenantSubdomain } from 'src/app/tenant/tenant-subdomain';

export class AuthApi {
  static async sendEmailVerification() {
    const response = await authAxios.post(
      '/auth/send-email-address-verification-email',
      {
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      }
    );

    return response.data;
  }

  static async sendPasswordResetEmail(email) {
    const response = await authAxios.post(
      '/auth/send-password-reset-email',
      {
        email,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async registerWithEmailAndPassword(
    email,
    password,
  ) {
    const invitationToken = AuthInvitationToken.get();

    const response = await authAxios.post('/auth/sign-up', {
      email,
      password,
      invitationToken,
      tenantId: tenantSubdomain.isSubdomain
        ? AuthCurrentTenant.get()
        : undefined,
    });

    AuthInvitationToken.clear();

    return response.data;
  }

  static async signinWithEmailAndPassword(email, password) {
    const invitationToken = AuthInvitationToken.get();

    const response = await authAxios.post('/auth/sign-in', {
      email,
      password,
      invitationToken,
      tenantId: tenantSubdomain.isSubdomain
        ? AuthCurrentTenant.get()
        : undefined,
    });

    AuthInvitationToken.clear();

    return response.data;
  }

  static async fetchMe() {
    const response = await authAxios.get('/auth/me');
    return response.data;
  }

  static async isEmailConfigured() {
    const response = await authAxios.get(
      '/auth/email-configured',
    );
    return response.data;
  }

  static signout() {
    AuthToken.set(null, true);
  }

  static async updateProfile(data) {
    const body = {
      data,
    };

    const response = await authAxios.put(
      '/auth/profile',
      body,
    );

    return response.data;
  }

  static async changePassword(oldPassword, newPassword) {
    const body = {
      oldPassword,
      newPassword,
    };

    const response = await authAxios.put(
      '/auth/change-password',
      body,
    );

    return response.data;
  }

  static async passwordReset(token, password) {
    const response = await authAxios.put(
      '/auth/password-reset',
      {
        token,
        password,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async verifyEmail(token) {
    const response = await authAxios.put(
      '/auth/verify-email',
      {
        token,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }
}