const en = {
  notifications: {
    readll: 'Mark all as read',
    deletll: 'Delete all',
    viewll: 'View all ',
  },
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    confirm: 'Confirm',
    start: 'Start',
    end: 'End',
    filters: 'Filters',
    information: 'Information',
    attachements: 'Attachements',
    history: 'History',
    addActivity: 'New activity',
    required: 'Fill the required fields',
    ok: 'Ok'
  },

  app: {
    title: 'MIGRIGHTS',
  },

  entities: {
    informationCategory: {
      name: 'information Category',
      label: 'Information Categories',
      menu: 'Categories',
      exporterFileName: 'informationCategory_export',
      list: {
        menu: 'Information Categories',
        title: 'Information Categories',
      },
      create: {
        success: 'Category successfully saved',
      },
      update: {
        success: 'Category successfully saved',
      },
      destroy: {
        success: 'Category successfully deleted',
      },
      destroyAll: {
        success: 'Category(s) successfully deleted',
      },
      edit: {
        title: 'Edit Category',
      },
      fields: {
        id: 'Id',
        'titleFR': 'French Title',
        'titleEN': 'English Title',
        'titleAR': 'Arabic Title',
        'descriptionFR': 'Description in French',
        'descriptionEN': 'Description in English',
        'descriptionAR': 'Description in Arabic',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'waiting': 'Waiting',
          'open': 'In Progress',
          'closed': 'Closed',
          'canceled': 'Canceled',
        },
        'priority': {
          'low': 'Low',
          'medium': 'Medium',
          'high': 'High',
        },
        'type': {
          'information': 'information',
          'publish': 'publish'
        },
        'news': {
          'true': 'yes',
          'false': 'no'
        }
      },
      new: {
        title: 'New Category',
      },
      view: {
        title: 'View Category',
      },
      importer: {
        title: 'Import Information Categories',
        fileName: 'informationCategory_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    informations: {
      name: 'informations',
      label: 'Informations',
      menu: 'Informations',
      exporterFileName: 'informations_export',
      list: {
        menu: 'Informations',
        exporterFileName: 'informations_export',
        list: {
          menu: 'Informations',
          title: 'Informations',
        },
        create: {
          success: 'Informations successfully saved',
        },
        update: {
          success: 'Informations successfully saved',
        },
        destroy: {
          success: 'Informations successfully deleted',
        },
        destroyAll: {
          success: 'Informations(s) successfully deleted',
        },
        edit: {
          title: 'Edit Informations',
        },
        fields: {
          id: 'Id',
          'category': 'Category',
          'titleFR': 'French Title',
          'titreEN': 'English Title',
          'titreAR': 'Arabic Title',
          'descriptionFR': 'Description in French',
          'descriptionEN': 'Description in English',
          'descriptionAR': 'Description in Arabic',
          'addressFR' : 'French Address',
          'addressAR' : 'Arabic Address',
          'addressEN' : 'English Address',
          
          'type' : 'Type',
          'publish' : 'Publish',
          'num_Tel' : 'Telephone number',
          'site_web' : 'website',  
          'email' : 'E-mail adress', 
          'images': 'Images',
          'document': 'Document',
          'videos': 'Videos',
          'googleMapsPosition': 'Google Maps Position',
          'tags': 'Tags',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type':{
            'information':'Informations',
            'news':'News'
          },
          'publish':{
            'true':'Yes',
            'false':'No'
          }
        },
        new: {
          title: 'New Informations',
        },
        view: {
          title: 'View Informations',
        },
        importer: {
          title: 'Import Informations',
          fileName: 'informations_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
        title: 'Informations',
      },
      create: {
        success: 'Informations successfully saved',
      },
      update: {
        success: 'Informations successfully saved',
      },
      destroy: {
        success: 'Informations successfully deleted',
      },
      destroyAll: {
        success: 'Informations(s) successfully deleted',
      },
      edit: {
        title: 'Edit Informations',
      },
      fields: {
        id: 'Id',
        'category': 'Category',
        'titleFR': 'French Title',
        'titreEN': 'English Title',
        'titreAR': 'Arabic Title',
        'descriptionFR': 'Description in French',
        'descriptionEN': 'Description in English',
        'descriptionAR': 'Description in Arabic',
        'local_Adresse': 'Address',
        'type': 'Type',
        'publish': 'Publish',
        'num_Tel': 'Telephone number',
        'site_web': 'website',
        'email': 'E-mail adress',
        'images': 'Images',
        'document': 'Document',
        'videos': 'Videos',
        'googleMapsPosition': 'Google Maps Position',
        'tags': 'Tags',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'type': {
          'information': 'Informations',
          'news': 'News'
        },
        'publish': {
          'true': 'Yes',
          'false': 'No'
        }
      },
      new: {
        title: 'New Informations',
      },
      view: {
        title: 'View Informations',
      },
      importer: {
        title: 'Import Informations',
        fileName: 'informations_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    testimonyCategory: {
      name: 'testimony Category',
      label: 'Testimony Categories',
      menu: 'Categories',
      exporterFileName: 'testimonyCategory_export',
      list: {
        menu: 'Testimony Categories',
        title: 'Testimony Categories',
      },
      create: {
        success: 'Category successfully saved',
      },
      update: {
        success: 'Category successfully saved',
      },
      destroy: {
        success: 'Category successfully deleted',
      },
      destroyAll: {
        success: 'Category(s) successfully deleted',
      },
      edit: {
        title: 'Edit Category',
      },
      fields: {
        id: 'Id',
        'titleFR': 'French Title',
        'titleEN': 'English Title',
        'titleAR': 'Arabic Title',
        'descriptionFR': 'Description in French',
        'descriptionEN': 'Description in English',
        'descriptionAR': 'Description in Arabic',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Category',
      },
      view: {
        title: 'View Category',
      },
      importer: {
        title: 'Import Testimony Categories',
        fileName: 'testimonyCategory_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    activity: {
      name: 'activity',
      label: 'Activities',
      menu: 'Activities',
      exporterFileName: 'activity_export',
      list: {
        menu: 'Activities',
        title: 'Activities',
      },
      create: {
        success: 'Activity successfully saved',
      },
      update: {
        success: 'Activity successfully saved',
      },
      destroy: {
        success: 'Activity successfully deleted',
      },
      destroyAll: {
        success: 'Activity(s) successfully deleted',
      },
      edit: {
        title: 'Edit Activity',
      },
      fields: {
        id: 'Id',
        'comment': 'Comment',
        date: 'Date',
        'images': 'Images',
        'audio': 'Audio',
        'documents': 'Documents',
        'video': 'Video',
        'position': 'Position',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Activity',
      },
      view: {
        title: 'View Activity',
      },
      importer: {
        title: 'Import Activities',
        fileName: 'activity_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    testimony: {
      name: 'testimony',
      label: 'Testimonies',
      menu: 'Testimonies',
      exporterFileName: 'testimony_export',
      list: {
        menu: 'Testimonies',
        exporterFileName: 'testimony_export',
        list: {
          menu: 'Testimonies',
          title: 'Testimonies',
        },
        create: {
          success: 'Testimony successfully saved',
        },
        update: {
          success: 'Testimony successfully saved',
        },
        destroy: {
          success: 'Testimony successfully deleted',
        },
        destroyAll: {
          success: 'Testimony(s) successfully deleted',
        },
        edit: {
          title: 'Edit Testimony',
        },
        fields: {
          id: 'Id',
          'category': 'Category',
          'title': 'Title',
          'description': 'Description',
          'region': 'Region',
          'testimonyType': 'Type',
          'status': 'Status',
          'priority': 'Priority',
          'assignedTo': 'Assigned To',
          'images': 'Images',
          'audio': 'Audio',
          'documents': 'Documents',
          'addressFR' : 'French Address',
          'addressAR' : 'Arabic Address',
          'addressEN' : 'English Address',
         
          'publish' : 'publish',
          'videos': 'Videos',
          'position': 'Position',
          'anonymous': 'Anonymous',
          'activity': 'Activity',
          'tags': 'Tags',
          'transferTo': 'Transfer To',
          'createdBy': 'Created By',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
          contact: 'Means of Communication'
        },
        enumerators: {
          'region': {
            'tunis': 'Tunis',
            'ariana': 'Ariana',
            'beja': 'Beja',
            'ben_arouss': 'Ben Arous',
            'bizerte': 'Bizerte',
            'gabes': 'Gabes',
            'gafsa': 'Gafsa',
            'jendouba': 'Jendouba',
            'kairouan': 'Kairouan',
            'kasserine': 'Kasserine',
            'kebili': 'Kebili',
            'kef': 'Kef',
            'mahdia': 'Mahdia',
            'manouba': 'Manouba',
            'medenine': 'Medenine',
            'monastir': 'Monastir',
            'nabeul': 'Nabeul',
            'sfax': 'Sfax',
            'sidi_bouzid': 'Sidi Bouzid',
            'siliana': 'Siliana',
            'sousse': 'Sousse',
            'tataouine': 'Tataouine',
            'tozeur': 'Tozeur',
            'zaghouan': 'Zaghouan',
            'null': 'No Region'
          },
          'status': {
            'waiting': 'Waiting',
            'open': 'In Progress',
            'closed': 'Closed',
            'canceled': 'Canceled',
          },
          'priority': {
            'low': 'Low',
            'medium': 'Medium',
            'high': 'High',
          },
          'testimonyType':{
            'testimony':'Testimony',
            'assistance':'Assistance'
          },
          'type':{
            'information':'Information',
            'publish':'Publier'
          },
          'news':{
            'true':'yes',
            'false':'no'
          }
        },
        new: {
          title: 'New Testimony',
        },
        view: {
          title: 'View Testimony',
        },
        importer: {
          title: 'Import Testimonies',
          fileName: 'testimony_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
        title: 'Testimonies',
      },
      create: {
        success: 'Testimony successfully saved',
      },
      update: {
        success: 'Testimony successfully saved',
      },
      destroy: {
        success: 'Testimony successfully deleted',
      },
      destroyAll: {
        success: 'Testimony(s) successfully deleted',
      },
      edit: {
        title: 'Edit Testimony',
      },
      fields: {
        id: 'Id',
        'category': 'Category',
        'title': 'Title',
        'description': 'Description',
        'region': 'Region',
        'testimonyType': 'Type',
        'status': 'Status',
        'priority': 'Priority',
        'assignedTo': 'Assigned To',
        'images': 'Images',
        'audio': 'Audio',
        'documents': 'Documents',
        'local_Adresse': 'Adress',
        'publish': 'publish',
        'videos': 'Videos',
        'position': 'Position',
        'anonymous': 'Anonymous',
        'activity': 'Activity',
        'tags': 'Tags',
        'transferTo': 'Transfer To',
        'createdBy': 'Created By',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
        contact: 'Means of Communication'
      },
      enumerators: {
        'region': {
          'tunis': 'Tunis',
          'ariana': 'Ariana',
          'beja': 'Beja',
          'ben_arouss': 'Ben Arous',
          'bizerte': 'Bizerte',
          'gabes': 'Gabes',
          'gafsa': 'Gafsa',
          'jendouba': 'Jendouba',
          'kairouan': 'Kairouan',
          'kasserine': 'Kasserine',
          'kebili': 'Kebili',
          'kef': 'Kef',
          'mahdia': 'Mahdia',
          'manouba': 'Manouba',
          'medenine': 'Medenine',
          'monastir': 'Monastir',
          'nabeul': 'Nabeul',
          'sfax': 'Sfax',
          'sidi_bouzid': 'Sidi Bouzid',
          'siliana': 'Siliana',
          'sousse': 'Sousse',
          'tataouine': 'Tataouine',
          'tozeur': 'Tozeur',
          'zaghouan': 'Zaghouan',
          'null': 'No Region'
        },
        'status': {
          'waiting': 'Waiting',
          'open': 'In Progress',
          'closed': 'Closed',
          'canceled': 'Canceled',
        },
        'priority': {
          'low': 'Low',
          'medium': 'Medium',
          'high': 'High',
        },
        'testimonyType': {
          'testimony': 'Testimony',
          'assistance': 'Assistance'
        },
        'type': {
          'information': 'Information',
          'publish': 'Publier'
        },
        'news': {
          'true': 'yes',
          'false': 'no'
        }
      },
      new: {
        title: 'New Testimony',
      },
      view: {
        title: 'View Testimony',
      },
      importer: {
        title: 'Import Testimonies',
        fileName: 'testimony_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    tags: {
      name: 'tags',
      label: 'Tags',
      menu: 'Tags',
      exporterFileName: 'tags_export',
      list: {
        menu: 'Tags',
        title: 'Tags',
      },
      create: {
        success: 'Tags successfully saved',
      },
      update: {
        success: 'Tags successfully saved',
      },
      destroy: {
        success: 'Tags successfully deleted',
      },
      destroyAll: {
        success: 'Tags(s) successfully deleted',
      },
      edit: {
        title: 'Edit Tags',
      },
      fields: {
        id: 'Id',
        'titleFR': 'French Title',
        'titleEN': 'English Title',
        'titleAR': 'Arabic Title',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Tags',
      },
      view: {
        title: 'View Tags',
      },
      importer: {
        title: 'Import Tags',
        fileName: 'tags_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    partner: {
      name: 'partner',
      label: 'Partners',
      menu: 'Partners',
      exporterFileName: 'partner_export',
      list: {
        menu: 'Partners',
        title: 'Partners',
      },
      create: {
        success: 'Partner successfully saved',
      },
      update: {
        success: 'Partner successfully saved',
      },
      destroy: {
        success: 'Partner successfully deleted',
      },
      destroyAll: {
        success: 'Partner(s) successfully deleted',
      },
      edit: {
        title: 'Edit Partner',
      },
      fields: {
        id: 'Id',
        'category': 'Category',
        'title': 'Title',
        'desription': 'Desription',
        'phone': 'Phone',
        'mobile': 'Mobile',
        'address': 'Address',
        'email': 'Email',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Partner',
      },
      view: {
        title: 'View Partner',
      },
      importer: {
        title: 'Import Partners',
        fileName: 'partner_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    partnerCategory: {
      name: 'partner Category',
      label: 'Partner Categories',
      menu: 'Partner Categories',
      exporterFileName: 'partnerCategory_export',
      list: {
        menu: 'Partner Categories',
        title: 'Partner Categories',
      },
      create: {
        success: 'PartnerCategory successfully saved',
      },
      update: {
        success: 'PartnerCategory successfully saved',
      },
      destroy: {
        success: 'PartnerCategory successfully deleted',
      },
      destroyAll: {
        success: 'PartnerCategory(s) successfully deleted',
      },
      edit: {
        title: 'Edit PartnerCategory',
      },
      fields: {
        id: 'Id',
        'titleFR': 'Title',
        'description': 'Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Partner Category',
      },
      view: {
        title: 'View Partner Category',
      },
      importer: {
        title: 'Import Partner Categories',
        fileName: 'partnerCategory_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    inactive: {
      message:
        "Your account is deactivated, please contact the administration.",
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all business resources',
    },
    manager: {
      label: 'Manager',
      description: 'Migrights Application Manager',
    },
    member: {
      label: 'Member',
      description: 'Task-Force Member Team',
    },
    migrant: {
      label: 'Migrant',
      description: 'Migrant',
    }
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      nationality: 'Nationality',
      birthDate: 'Birth Date',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
      inactive: 'Inactive',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSuccess: 'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantUrl: 'Workspace URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },

  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      primaryColor: 'Primary Color',
      secondaryColor: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      amber: 'Amber',
      blue: 'Blue',
      cyan: 'Cyan',
      deep_orange: 'Deep Orange',
      deep_purple: 'Deep Purple',
      green: 'Green',
      indigo: 'Indigo',
      light_blue: 'Light Blue',
      light_green: 'Light Green',
      lime: 'Lime',
      orange: 'Orange',
      pink: 'Pink',
      purple: 'Purple',
      red: 'Red',
      teal: 'Teal',
      yellow: 'Yellow',
      grey: 'Grey',
      blue_grey: 'Blue Grey',
      brown: 'Brown',
    },
  },

  dashboard: {
    // empty dasbord translate plz //
    chart: {
      title: "My Chart",
      content: "No data to display for selected time period",
    },
    // 
    'status': {
      'waitting': 'Waiting',
      'open': 'In Progress',
      'closed': 'Closed',
      'canceled': 'Canceled',
    },
    'priority': {
      'low': 'Low',
      'medium': 'Medium',
      'hight': 'High',
    },
    'assign': {
      'save': 'Assign this task for me ',
      'view': 'Click for more details',
      'cancel': 'Return to choose another task',
    },
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/app/dashboard/components/dashboard.component.html.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',

      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },

    text: {
      region: 'Statistics of testimonials by region',
      assign: 'Testimonial statistics by member',
      anonymous: 'Statistics of testimonials by Anonymous',
      partenar: 'Statistics of testimonials by Partner',
      status: 'Testimonial Statistics by Status',
      category: 'Testimonial Statistics by Category',
    },


  },

  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */

  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      // notType: ({ path, type, value, originalValue }) => {
      //   return `${path} must be a ${type}`;
      // },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      type: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `Status: {0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Items per page:',
    nextPageLabel: 'Next page',
    previousPageLabel: 'Previous page',
    firstPageLabel: 'First page',
    lastPageLabel: 'Last page',
    getRangeLabel: {
      zero: '0 of {0}',
      interval: '{0} - {1} of {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Add a second',
    downSecondLabel: 'Minus a second',
    upMinuteLabel: 'Add a minute',
    downMinuteLabel: 'Minus a minute',
    upHourLabel: 'Add a hour',
    downHourLabel: 'Minus a hour',
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    prevYearLabel: 'Previous year',
    nextYearLabel: 'Next year',
    prevMultiYearLabel: 'Previous 21 years',
    nextMultiYearLabel: 'Next 21 years',
    switchToMonthViewLabel: 'Change to month view',
    switchToMultiYearViewLabel: 'Choose month and year',
    cancelBtnLabel: 'Cancel',
    setBtnLabel: 'Set',
    rangeFromLabel: 'From',
    rangeToLabel: 'To',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'No data',
    loading: 'Loading...',
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  menu:{
    administration : 'Administration',
    informations : 'Information',
    help:'Help',
    assistance:'Assistance',
    testimony : 'Testimony', 
    common : 'Partners'
  },

};

export default en;
