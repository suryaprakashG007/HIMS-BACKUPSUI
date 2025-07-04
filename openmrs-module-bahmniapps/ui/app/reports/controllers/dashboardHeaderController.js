'use strict';

angular.module('bahmni.reports')
    .controller('DashboardHeaderController', [
        '$scope',
        'appService',
        '$state',
        function ($scope, appService, $state) {
            var setBackLinks = function () {
                var backLinks = [
                    {
                        label: 'Home',
                        url: '../home/',
                        accessKey: 'h',
                        image: '/bahmni/images/Homeicon.png' // Home icon
                    },
                    {
                        text: 'REPORTS_HEADER_REPORTS',
                        state: 'dashboard.reports',
                        accessKey: 'd',
                        image: '/bahmni/images/CustomReportsIcon.png' // Custom Reports icon
                    },
                    {
                        text: 'REPORTS_HEADER_MY_REPORTS',
                        state: 'dashboard.myReports',
                        accessKey: 'm',
                        image: '/bahmni/images/MyReportsicon.png' // My Reports icon
                    }
                ];
                $state.get('dashboard').data.backLinks = backLinks;
            };

            var init = function () {
                setBackLinks();
            };

            return init();
        }
    ]);
