/**
 * Storage permissions.
 *
 * @id - Used to identify the rule on permissions and upload.
 * @folder - Folder where the files will be saved
 * @maxSizeInBytes - Max allowed size in bytes
 * @bypassWritingPermissions - Does not validate if the user has permission to write
 * @publicRead - The file can be publicly accessed via the URL without the need for a signed token
 */
export class Storage {
  static get values() {
    return {


      informationsImages: {
        id: 'informationsImages',
        folder: 'tenant/:tenantId/informations/images',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      informationsDocument: {
        id: 'informationsDocument',
        folder: 'tenant/:tenantId/informations/document',
        maxSizeInBytes: 100 * 1024 * 1024,
      },



      activityImages: {
        id: 'activityImages',
        folder: 'tenant/:tenantId/activity/images',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      activityAudio: {
        id: 'activityAudio',
        folder: 'tenant/:tenantId/activity/audio',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      activityDocuments: {
        id: 'activityDocuments',
        folder: 'tenant/:tenantId/activity/documents',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      activityVideo: {
        id: 'activityVideo',
        folder: 'tenant/:tenantId/activity/video',
        maxSizeInBytes: 100 * 1024 * 1024,
      },

      testimonyImages: {
        id: 'testimonyImages',
        folder: 'tenant/:tenantId/testimony/images',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      testimonyAudio: {
        id: 'testimonyAudio',
        folder: 'tenant/:tenantId/testimony/audio',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      testimonyDocuments: {
        id: 'testimonyDocuments',
        folder: 'tenant/:tenantId/testimony/documents',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      testimonyVideos: {
        id: 'testimonyVideos',
        folder: 'tenant/:tenantId/testimony/videos',
        maxSizeInBytes: 100 * 1024 * 1024,
      },






      settingsLogos: {
        id: 'settingsLogos',
        folder: 'tenant/:tenantId/settings/logos',
        maxSizeInBytes: 10 * 1024 * 1024,
        publicRead: true,
      },
      settingsBackgroundImages: {
        id: 'settingsBackgroundImages',
        folder:
          'tenant/:tenantId/settings/backgroundImages',
        maxSizeInBytes: 10 * 1024 * 1024,
        publicRead: true,
      },
      userAvatarsProfiles: {
        id: 'userAvatarsProfiles',
        folder: 'user/avatars/profile/:userId',
        maxSizeInBytes: 10 * 1024 * 1024,
        bypassWritingPermissions: true,
        publicRead: true,
      },
    };
  }
}
