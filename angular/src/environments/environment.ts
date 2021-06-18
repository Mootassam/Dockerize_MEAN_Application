const backendUrl = `http://172.16.224.151:8080/api`;
const urlsocket = `http://172.16.224.151:8080`;

/**
 * Frontend Url.
 */
const frontendUrl = {
  host: 'localhost:4200',
  protocol: 'http',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'single';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = false;
const stripePublishableKey = '';

export const environment = {
  production: false,
  frontendUrl,
  backendUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey,
  urlsocket,
};
