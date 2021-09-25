import { RouteInfo } from "./vertical-sidebar.metadata";

export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Personal',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        extralink: true,
        label: '',
        labelClass: '',
        submenu: []
    },
    {
        path: 'dashboard',
        title: 'Dashboards',
        icon: 'Home',
        class: 'has-arrow',
        label: '3',
        labelClass: 'side-badge badge badge-info',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/dashboard1',
                title: 'Modern',
                icon: 'mdi mdi-adjust',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard2',
                title: 'Classic',
                icon: 'mdi mdi-adjust',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard3',
                title: 'Analytical',
                icon: 'mdi mdi-adjust',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/apps/mail/inbox',
        title: 'Mail',
        icon: 'Inbox',
        class: '',
        label: 'new',
        labelClass: 'side-badge badge badge-success',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/email',
        title: 'Email',
        icon: 'Mail',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/chat',
        title: 'Chat',
        icon: 'message-square',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/todo',
        title: 'Todo',
        icon: 'Sliders',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/tasks',
        title: 'Tasks',
        icon: 'Layout',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/notes',
        title: 'Notes',
        icon: 'Book',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/users',
        title: 'Users',
        icon: 'Users',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/usersrxjs',
        title: 'Users-Rxjs',
        icon: 'Users',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/fullcalendar',
        title: 'Calendar',
        icon: 'Calendar',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/taskboard',
        title: 'Taskboard',
        icon: 'Layout',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/contact',
        title: 'Contact',
        icon: 'Phone',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/contactrxjs',
        title: 'Contact-Rxjs',
        icon: 'Phone',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/contact-list',
        title: 'Contact Lists',
        icon: 'Pocket',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/contact-list-rxjs',
        title: 'Contact Lists-Rxjs',
        icon: 'Pocket',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/contact-grid',
        title: 'Contact Grid',
        icon: 'Server',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/apps/invoice',
        title: 'Invoice',
        icon: 'File',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: 'ticket',
        title: 'Ticket',
        icon: 'bookmark',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: 'apps/ticket/ticketlist',
                title: 'Ticket List',
                icon: 'mdi mdi-book-multiple',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: 'apps/ticket/ticketdetails',
                title: 'Ticket Details',
                icon: 'mdi mdi-book-plus',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'UI Components',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: 'component',
        title: 'UI Elements',
        icon: 'cpu',
        class: 'has-arrow',
        label: '13',
        labelClass: 'side-badge badge badge-danger',
        extralink: false,
        submenu: [
            {
                path: '/component/accordion',
                title: 'Accordion',
                icon: 'mdi mdi-equal',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/alert',
                title: 'Alert',
                icon: 'mdi mdi-message-bulleted',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/carousel',
                title: 'Carousel',
                icon: 'mdi mdi-view-carousel',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/dropdown',
                title: 'Dropdown',
                icon: 'mdi mdi-arrange-bring-to-front',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/modal',
                title: 'Modal',
                icon: 'mdi mdi-tablet',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/pagination',
                title: 'Pagination',
                icon: 'mdi mdi-backburger',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/poptool',
                title: 'Popover & Tooltip',
                icon: 'mdi mdi-image-filter-vintage',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/progressbar',
                title: 'Progressbar',
                icon: 'mdi mdi-poll',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/rating',
                title: 'Ratings',
                icon: 'mdi mdi-bandcamp',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/tabs',
                title: 'Tabs',
                icon: 'mdi mdi-sort-variant',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/timepicker',
                title: 'Timepicker',
                icon: 'mdi mdi-calendar-clock',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/buttons',
                title: 'Button',
                icon: 'mdi mdi-toggle-switch',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/notifier',
                title: 'Notifier',
                icon: 'mdi mdi-bandcamp',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'cards',
        title: 'Cards',
        icon: 'copy',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/cards/basiccards',
                title: 'Basic Cards',
                icon: 'mdi mdi-layers',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/customcards',
                title: 'Custom Cards',
                icon: 'mdi mdi-credit-card-scan',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/cards/weathercards',
                title: 'Weather Cards',
                icon: 'mdi mdi-weather-fog',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'extra-component',
        title: 'Extra Components',
        icon: 'layers',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/extra-component/toastr',
                title: 'Toastr',
                icon: 'mdi mdi-poll',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/editor',
                title: 'Editor',
                icon: 'mdi mdi-dns',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/dragndrop',
                title: 'Drag n Drop',
                icon: 'mdi mdi-arrow-expand-all',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'widgets',
        title: 'Widgets',
        icon: 'grid',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/widgets/apps',
                title: 'Widget Apps',
                icon: 'mdi mdi-comment-processing-outline',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/widgets/data',
                title: 'Widget Data',
                icon: 'mdi mdi-calendar',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Forms',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: 'forms',
        title: 'Form Elements',
        icon: 'Edit',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/forms/forminputs',
                title: 'Form Inputs',
                icon: 'mdi mdi-priority-low',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/inputgroups',
                title: 'Input Groups',
                icon: 'mdi mdi-rounded-corner',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/inputgrid',
                title: 'Input Grid',
                icon: 'mdi mdi-select-all',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/checkboxandradio',
                title: 'Checkbox & Radio',
                icon: 'mdi mdi-shape-plus',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/multiselect',
                title: 'Multiselect',
                icon: 'mdi mdi-select-inverse',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'formsl',
        title: 'Form Layouts',
        icon: 'Sidebar',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/forms/formsl/formbasic',
                title: 'Basic Forms',
                icon: 'mdi mdi-vector-difference-ba',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formsl/formhorizontal',
                title: 'Horizontal Forms',
                icon: 'mdi mdi-file-document-box',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formsl/formactions',
                title: 'Form Actions',
                icon: 'mdi mdi-code-greater-than',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formsl/formrowseparator',
                title: 'Row Separator',
                icon: 'mdi mdi-code-equal',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formsl/formstripedrows',
                title: 'Striped Rows',
                icon: 'mdi mdi-content-duplicate',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formsl/formdetail',
                title: 'Detail Forms',
                icon: 'mdi mdi-cards-outline',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'formsa',
        title: 'Form Addons',
        icon: 'Package',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/forms/formsa/formvalidation',
                title: 'Form Validation',
                icon: 'mdi mdi-alert-box',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formsa/typehead',
                title: 'Form Typehead',
                icon: 'mdi mdi-backburger',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formsa/datepicker',
                title: 'Datepicker',
                icon: 'mdi mdi-calendar-check',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formsa/language-datepicker',
                title: 'Language Datepicker',
                icon: 'mdi mdi-calendar-check',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/ngx',
                title: 'Form Wizard / Steps',
                icon: 'mdi mdi-attachment',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Tables',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: 'tables',
        title: 'Bootstrap Tables',
        icon: 'Crop',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/tables/basictables',
                title: 'Basic Tables',
                icon: 'mdi mdi-border-all',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/darktables',
                title: 'Dark Basic Tables',
                icon: 'mdi mdi-border-all',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/colortables',
                title: 'Colored Tables',
                icon: 'mdi mdi-border-all',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/tablesizing',
                title: 'Table Sizing',
                icon: 'mdi mdi-border-all',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/tables/datatable',
        title: 'Data Tables',
        icon: 'Disc',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '/tables/ngtable',
        title: 'Ng Tables',
        icon: 'Maximize',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Charts',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'Loader',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/charts/chartjs',
                title: 'Chart Js',
                icon: 'mdi mdi-svg',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/chartistjs',
                title: 'Chartist Js',
                icon: 'mdi mdi-blur',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/ngxchart',
                title: 'Ngx Charts',
                icon: 'mdi mdi-blur',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/apexchart',
                title: 'Apex Charts',
                icon: 'mdi mdi-blur',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    // {
    //     path: '',
    //     title: 'Maps',
    //     icon: 'mdi mdi-dots-horizontal',
    //     class: 'nav-small-cap',
    //     label: '',
    //     labelClass: '',
    //     extralink: true,
    //     submenu: []
    // },
    // {
    //     path: '/maps/google',
    //     title: 'Google Maps',
    //     icon: 'Map',
    //     class: '',
    //     label: '',
    //     labelClass: '',
    //     extralink: false,
    //     submenu: []
    // },
    {
        path: '',
        title: 'Pages',
        icon: 'mdi mdi-dots-horizontal',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: 'ecom',
        title: 'Ecommerce Pages',
        icon: 'shopping-cart',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/ecom/products',
                title: 'Products',
                icon: 'mdi mdi-cards-variant',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/cart',
                title: 'Cart',
                icon: 'mdi mdi-cart',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/edit',
                title: 'Edit Products',
                icon: 'mdi mdi-cart-plus',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/details',
                title: 'Product Details',
                icon: 'mdi mdi-camera-burst',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/orders',
                title: 'Orders',
                icon: 'mdi mdi-chart-pie',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/ecom/checkout',
                title: 'Checkout',
                icon: 'mdi mdi-clipboard-check',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'authentication',
        title: 'Authentication',
        icon: 'Lock',
        class: 'has-arrow',
        label: '6',
        labelClass: 'side-badge badge badge-success',
        extralink: false,
        submenu: [
            {
                path: '/authentication/login',
                title: 'Login',
                icon: 'mdi mdi-account-key',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/login2',
                title: 'Login 2',
                icon: 'mdi mdi-account-key',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup',
                title: 'Register',
                icon: 'mdi mdi-account-plus',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup2',
                title: 'Register 2',
                icon: 'mdi mdi-account-plus',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/404',
                title: '404',
                icon: 'mdi mdi-alert-outline',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/lock',
                title: 'Lockscreen',
                icon: 'mdi mdi-account-off',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'sample-pages',
        title: 'Sample Pages',
        icon: 'book-open',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/sample-pages/profile',
                title: 'Profile',
                icon: 'mdi mdi-account-network',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/pricing',
                title: 'Pricing',
                icon: 'mdi mdi-file-export',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/invoice',
                title: 'Invoice',
                icon: 'mdi mdi-ungroup',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/helperclasses',
                title: 'Helper Classes',
                icon: 'mdi mdi-tune',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/starter',
                title: 'Starter Page',
                icon: 'mdi mdi-crop-free',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'timeline',
        title: 'Timeline',
        icon: 'Activity',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/timeline/left',
                title: 'Left Timeline',
                icon: 'mdi mdi-clock-fast',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/right',
                title: 'Right Timeline',
                icon: 'mdi mdi-clock-end',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/timeline/center',
                title: 'Center Timeline',
                icon: 'mdi mdi-clock-in',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'icons',
        title: 'Icons',
        icon: 'Feather',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/icons/fontawesome',
                title: 'Fontawesome',
                icon: 'mdi mdi-emoticon-cool',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/simpleline',
                title: 'Simple Line Icons',
                icon: 'mdi mdi mdi-image-broken-variant',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/material',
                title: 'Material Icons',
                icon: 'mdi mdi-emoticon',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: 'mlevel',
        title: 'Menu Levels',
        icon: 'align-left',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: 'sub-child',
                title: 'Second Level',
                icon: 'mdi mdi-octagram',
                class: '',
                label: '',
                labelClass: '',
                extralink: true,
                submenu: []
            },
            {
                path: '/sub-child',
                title: 'Second Child',
                icon: 'mdi mdi-octagram',
                class: 'has-arrow',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: [
                    {
                        path: '/sub-child/td-child-one',
                        title: 'Third 1.1',
                        icon: 'mdi mdi-playlist-plus',
                        class: '',
                        label: '',
                        labelClass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: '/sub-child/td-child-two',
                        title: 'Third 1.2',
                        icon: 'mdi mdi-playlist-plus',
                        class: '',
                        label: '',
                        labelClass: '',
                        extralink: false,
                        submenu: []
                    }
                ]
            }
        ]
    }
];
