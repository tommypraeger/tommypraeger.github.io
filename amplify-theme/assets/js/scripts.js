/**
 * Site header (components/_site-header.scss)
 */

/* ----- General ----- */
.orange-text {
    color: #FF9900 !important;
}

.white-text {
    color: white !important;
}

.inline {
    display: inline !important;
}

.inline-block {
    display: inline-block !important;
}

.block {
    display: block !important;
}

.content-filter {
    float:none;
    .filter-item {
        float:left;
        margin-right: 10px;
    }
    .btn {
        height: 30px !important;
        font-weight: normal;
    }
    .row {
        margin-bottom:15px !important;
        line-height: 38px;
    }
}

.inline-bash {
    display: inline-block;
    font-family: "Source Code Pro",monospace;
    color: #c0341d;
    background-color: #fcefed;
    border-radius: .1875rem;
    padding: .125rem .375rem .1875rem .375rem;
}

.site-header {
	position: fixed;
	//width: 1442px;
	//height:  75px;
	//border-bottom: 1px solid rgba($color-dark-blue, .15);
	z-index: 1000;
    background-color:white;
    margin: auto;
    width: 100%;
    //left: 0;
    //right: 0;
    //border-bottom: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0px -2px 10px rgba(0,0,0,.3);

    @media (max-width: 828px) {
        height: 60px; //75px
    }

    .site-header-container {
        margin-top: 17px;
        margin-bottom: 9px;    
        width: 1180px;
        max-width: 90%;

        @media (max-width: 828px) {
            max-width: 95%;
            margin-top: 11px;
            margin-left: 0;
        }
        
        #github-logo {
            position: absolute;
            display: none;
            opacity: 0.5;

            @media (min-width: 1314px) {
                right: calc(50vw - 640px);
                bottom: 24px;
                display: block;
            }
        }

        #github-logo-docs {
            position: absolute;
            display: none;
            filter: brightness(0) invert(1);

            @media (min-width: 1314px) {
                right: calc(50vw - 640px);
                bottom: 24px;
                display: block;
            }
        }
    }
}

.logo-container {
    display: inline-block;

    @media (min-width: 828px) {
        visibility: visible !important;
    }

    @media (max-width: 828px) {
        display: block;
        width: 208px;
        margin: auto;
    }
}

.homepage-header {
    width: 1180px;
    max-width: 90%;
    padding: 0;
}

/* ----- Navigation ----- */
.site-header__logo {
	@include link-reset;
	//display: block;
	//float: left;
    height: 31px;
    width: 93px;
    color: #828282;
    font-family: "Amazon Ember", "Helvetica", sans-serif;
    font-size: 26px;
    line-height: 31px;
    top: 0;
    bottom: 0;

	&:hover,
	&:focus,
	&:active {
		color: $color-dark-blue;
	}

	img {
        //height: 38px;
        width: 50px;
        //margin-left: 109px;
        
        @media (max-width: 828px) {
            width: 46px;
            margin-top: 1px;
        }
    }
    
    .header-amplify {
        display: inline-block;
        margin-top: 2px;

        @media (max-width: 828px) {
            margin-top: 1px;
        }
    }

    .docs-header-amplify {
        color: white;
        font-weight: 100;
    }
}

.col-xs-12 {
    margin-top: 1%;
}

/* ----- Navigation ----- */
.site-header__nav {
	@include list-horizontal;
	@include clearfix;
	float: right;
	margin-bottom: 0;
    margin-top: 8px;
    background: transparent !important;

    @media (max-width: 882px){
        //margin-top: 20px !important;
    }

    .dropbtn {
        color: #828282;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        border: none;
        cursor: pointer;
    }
    
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    
    .dropdown-content a {
        color: #828282;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        height: 32px;
        font-weight: 500;
        padding: 4px 10px;
        text-decoration: none;
        display: block;
        border-bottom: none !important;

        p {
            display: inline-block;
        }
    }

    .dropdown-content a:hover p {
        border-bottom: 2px solid #FF9900;
    }
    
    .dropdown-content a:hover {background-color: #f1f1f1}
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
    
    .dropbtn:hover {
        border-bottom: 2px solid #FF9900;
    }

    select {
        color: #828282;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        width: 50px;
        background: transparent;
        border-bottom: 2px solid;
		border-color: transparent;
        transition: border-color 0.2s;
        border-radius: 0px;
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        //-webkit-appearance: none;

        &:hover,
		&:focus,
		&:active {
            border-bottom: 2px solid #FF9900;
            transition: border-color 0.2s;
            cursor: pointer;
		}
    }

	li {
		+ li {
            margin-left: 2.5rem;
		}
	}

	a {
		@include link-reset;
		display: block;
		//font-size: .875em;
		font-weight: 500;
		//font-family: $font-family-primary;
		//line-height: calc(3.5rem - 1px);
		//text-transform: uppercase;
		border-bottom: 2px solid;
		border-color: transparent;
        transition: border-color .2s;
        
        height: 24px;
        //width: 76px;
        color: #828282;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        line-height: 24px;


		&:hover,
		&:focus,
		&:active {
			border-color: #FF9900;
		}
	}

}

.site-search {
	border-radius: 5px;
	background-color: #E1E4EA;
    box-shadow: 1px 1px 4px 0 rgba(0,0,0,0.1);
    height: 36px;
    width: 180px;
    margin-top: -7px;
    
    .search-image {
        margin-left: 12px;
        margin-top: 9px;
        z-index: 2;
        float: left;
    }

    #search-input {
        margin-top: 6px;
        padding-left: 10px !important;
        background-color: #E1E4EA;
        border: none;
        color: #828282;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        line-height: 24px;
        max-width: 150px;

    }
    #search-input:focus {
        outline: none;
    }
}

@media (max-width: 1084px) {
	.site-header__nav {
		//width: 100%;
		background: white;
		text-align: center;
		//margin-top: -2px;
	}
}

button {
    cursor: pointer;
}

a {
    border-bottom: none;
}

/* ----- Offcanvas ----- */
.offcanvas {
	overflow: hidden;
	width: 100%;
	height: 100%;
	text-align: center;
	background-color: $color-white;
	position: fixed;
	top: 0;
	bottom: 0;
	opacity: 0;
	visibility: hidden;
	@include translate(0, -1.875rem);
	transition: transform .2s, opacity .2s, visibility .2s;
	z-index: $z-index-offcanvas;

	.offcanvas-expanded & {
		opacity: 1;
		visibility: visible;
		@include translate(0, 0);
	}
}

/* ----- Offcanvas navigation ----- */
.offcanvas__nav {
	height: 100%;
	overflow: scroll;
	padding-top: 100px;
	padding-bottom: 5rem;
	-webkit-overflow-scrolling: touch;

	li {
		padding: 0;

		&::before {
			display: none;
		}

		+ li {
			margin-top: 1.25rem;
		}
	}

	a {
		@include link-reset;
		color: $color-dark-blue;
		font-family: $font-family-secondary;
		text-transform: uppercase;
	}
}

/* ----- Offcanvas toggle ----- */
.toggle-button-container-expanded {
    top: 11px !important;
    left: 6px !important;
}

.toggle-button-container {
    position: absolute;
    top: 17px;
    left: 10px;

    .docs-toggle {
        span {
            background-color: white !important;
        }
    }

    .offcanvas-toggle {
        height: auto;
        width: auto;
        cursor: pointer;
        @include translate3d(0, 0, 0);
        z-index: $z-index-offcanvas-toggle;
        //margin-top: -12px;

        span {
            display: block;
            height: 4px;
            background-color: #FF9900;
            //position: absolute;
            left: 1.875rem;
            transition: top .2s, transform .2s, opacity .2s;
            margin-bottom: 6px;

            &:first-child {
                width: 29px;
            }

            &:nth-child(2) {
                width: 24px;
            }

            &:last-child {
                width: 19px;
            }
        }

        .offcanvas-expanded & {

            span {
                margin-bottom: -4px;

                &:first-child,
                &:last-child {
                    top: 2.6875rem;
                }

                &:first-child {
                    @include rotate(45);
                    width: 42px;
                }

                &:last-child {
                    @include rotate(-45);
                    width: 42px;
                }

                &:nth-child(2) {
                    opacity: 0;
                }
            }
        }
    }
}

.algolia-autocomplete {
    position: static !important;
}

#search-input-xs {
    position: absolute !important;
    right: 10px;
    top: 10px;
    width: 40px;
    height: 40px;
    background-color: #FF9900;
    border-radius: 100%;
    //background-image: url("/images/icons/Medium/Search.svg"),url("/amplify-js/images/icons/Medium/Search.svg");
    background-repeat: no-repeat;
    background-position: 33% 42%;
    transition: all 0.2s !important;
    border: none;
}

.docs-search-xs {
    background-color: #F4F4F4 !important;
    background-position: 48% 48% !important;
    color: #828282 !important;
}

#search-input-xs:focus {
    outline: none;
}

.search-box-expanded {
    right: 60px !important;
    width: 80% !important;
    border-radius: 5px !important;
    transition: all 0.2s !important;
    background-image: none !important;
    padding: 3px 3px 3px 10px !important;
    color: white;
    font-size: 16px !important;
}

#collapse-search {
    color: #232F3E;
    font-family: "Amazon Ember", "Helvetica", sans-serif;
    font-size: 16px;
    text-decoration: underline;
    display: none;
    border: none;
    background: none;
    float: right;
    position: absolute;
    top: 21px;
    right: 7px;

    @media (min-width: 828px) {
        display: none !important;
    }
}

/**
 * Hero subheader (components/_hero-subheader.scss)
 */

/* ----- General ----- */
.section-padding {
    padding-top: 68px;
}
.hero-subheader {

    @media (max-width: 828px) {
        height: auto !important;
        background: linear-gradient(30deg, #FF9900 55%, #FFC300) !important;
        padding-bottom: 8px !important;

        #half-phone {
            display: none !important;
        }

        #half-laptop {
            display: none !important;
        }

        #half-chatbot {
            display: none !important;
        }

        .hero-subheader__title {
            width: 100% !important;
            font-size: 24px !important; //30
            text-align: center !important;
            line-height: 30px !important; //36
            margin: auto;
            height: auto !important;
        }
    
        .btn {
            display: block !important;
            margin: auto !important;
            margin-top: 35px !important; //50px
        }

        .logos {
            margin: 30px auto !important;
            display: block !important;
            width: 264px;

            img {
                margin-left: 0 !important;
                position: relative;
                min-height: 1px;
                padding-left: 14px;
                padding-right: 14px;
            }
        }
    }

    .toolchain-header {
        @media (max-width: 828px) {
            margin-bottom: 50px;
        }
    }

    .ui-header {
        position: relative;
        //top: 75px;
        
        @media (max-width: 828px) {
            margin-bottom: 50px;
        }
    }

	color: $color-dark-blue;
	//background-image: url("/images/layout/background.jpg");
	background: linear-gradient(to right, #FF9900 70%,#fccf30);
	//padding: 3.75rem 0 (4.6875rem - 1.25rem) 0;
	background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
	background-position: center center;
    //width: 1440px;
    height: 475px;
    margin: auto;
    overflow: hidden;

	@media (min-width: $screen-sm-min) {
        padding-top: 130px;
    }

    @media (max-width: 828px) {
        padding-top: 110px !important;
    }

	.btn {
        margin-right: .9375rem;
        height: 61px;
        width: 275px;
        color: #FF9900;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 1.8px;
        line-height: 18px;
        text-align: center;
        //margin-left: 110px;
        text-transform: uppercase;
        padding-top: 21px;
        margin-top: 30px;

        border-radius: 4px;
        background-color: #FFFFFF;
        box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.3);

        @media (max-width: 828px) {
            height: 50px;
            width: 230px;
            padding-top: 17px;
        }
    }
    
    .btn:hover {
        background-color: #ededed
    }

    .btn:focus {
        background-color: #d6d6d6;
    }

	.btn--github,
	.btn--w-arrow-down {
		@extend .btn--dark;
    }
    .icon--arrow-right {
        display: none;
    }

	.site-header + & {
        //padding: 9.375rem 0 (4.6875rem - 1.25rem) 0;
        padding-top: 130px;

		@media (min-width: $screen-sm-min) {
            //padding: 15rem 0 (10.3125rem - 1.25rem) 0;
            padding-top: 130px;
        }
        
        .container {
            @media (min--width: 566px) {
                width: 100%;
            }
            
        }
    }
    
    .logo-sm {
        margin-left: 20px;
        vertical-align: middle;
    }

    .logos {
        margin-left: 10px;
        display: inline-block;
    }

    #half-phone {
        width: 618px;
        display: inline-block;
        margin-top: -195px;
        margin-left: 620px;
    }

    #half-laptop {
        width: 478px;
        display: inline-block;
        margin-top: -260px;
        margin-left: 620px;
    }

    #half-chatbot {
        position: relative;
        left: 500px;
        bottom: 200px;
    }
}

#marketing-section {
    margin-top: 70px;
}

.btn {
    color: #FFFFFF;
    font-family: "Amazon Ember", "Helvetica", sans-serif;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.8px;
    line-height: 18px;
    text-align: center;
    background-color: #FF9900;
    padding: 0 40px;
    height: 60px;
    text-transform: uppercase;
}

.btn:hover {
    background-color: #FFA41D;
}

.btn:focus {
    background-color: #E88B01;
}

.btn--light {
	color: $color-black;
	background-color: white;

	&:hover,
	&:focus,
	&:active {
		color: $color-white;
        background-color: orange;
        border-color: orange;
    }
    border-style: solid;
    border-width: 1px;
    border-color: lightgray;
}

@media (max-width: 828px) {
    #marketing-section {
        margin-top: 20px !important;
    }
}

.section-top {
    position: relative;
    
    @media (max-width: 828px) {    
        max-width: 95% !important;
        margin-top: 10px !important;

        .container {
            margin: auto !important;
            padding-top: 36px !important;
        }

        .header {
            font-size: 30px !important;
            line-height: 34px !important;
            margin-bottom: 20px !important;
            padding-top: 0 !important;
        }

        .subheader {
            font-size: 14px !important;
            line-height: 20px !important;
            margin-bottom: 25px !important;
            width: 90% !important;
        }

        .bottom-subheader {
            width: 100% !important;
            margin-top: 20px !important;
        }

        .btn {
            padding: 0 60px !important;
            margin-bottom: 0 !important;
        }
    }

    .section-code-block {
        max-width: 100%;
        margin-bottom: 30px;
        padding-bottom: 12px;
    }

    padding: 0;

    .btn {
        height: 50px;
    }

    .container {
        padding: 0;
        //padding-top: 63px;
        margin: auto;
        max-width: 83%;
    }
    //height: 680px;
    width: 1180px;
    //min-width: 1180px;
    max-width: 90%;
    border-radius: 9px;
    background-color: #FFFFFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.15);
    margin: auto;
    margin-top: 34px;

    .header {
        color: #232F3E;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 42px;
        font-weight: 300;
        line-height: 53px;
        //width: 940px;
        //margin: 63px 100px 10px 100px;
        margin-bottom: 30px;
        padding: 0;
        padding-top: 63px;
    }

    #launch-header {
        max-width: 600px;
    }

    #launch-subheader {
        max-width: 680px;
    }

    .marketing-div {
        // padding-right: 40px;
        // padding-left: 0px;

        @media screen {
            margin-bottom: 20px;
        }
    }

    .subheader {
        color: #828282;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        line-height: 24px;
        //width: 940px;
        //margin: 20px 100px 10px 100px;
        margin-bottom: 40px;
        padding: 0;

        a {
            color: #007EB9;
        }
    }
        .bottom-subheader {
            //margin-bottom: -100px;
            margin-bottom: 0 !important;
        }


    #library-btn {
        margin-bottom: 60px;
    }

    #cli-code-block {
        @media (max-width: 1130px) {
            display: none !important;
        }
        width: 500px;
        position: relative;
        float: right;
        bottom: 100px;
        margin-bottom: -60px;

        pre {
            //height: 144px;
            padding: 14px;
        }

        pre.highlight {
            font-size: 12px !important;
            line-height: 16px !important;
            overflow: hidden;
        }
    }

    #homepage-code-block {
        @media (max-width: 1150px) {
            display: none !important;
        }
        width: 310px;
        position: absolute;
        top: 70px;
        right: 100px;

        pre {
            height: 144px;
            padding: 14px;
        }

        pre.highlight {
            font-size: 12px !important;
            line-height: 16px !important;
            overflow: hidden;
        }
    }

    .grids-container {
        width: 100%;

        .cloud-grid {
            display: inline-block;
        }
        @media (max-width: 828px) {
            .cloud-grid {
                margin: auto;
                margin-bottom: 30px;
                width: 100%;
            }
            .grid-icon {
                height: 19px;
                width: 18px;
                position: relative;
                margin: 8px 8px;
                float: right;
            }

            .cloud-col {
                width: 100%;
                margin: auto;
            }

            .cloud-grid-item {
                //max-width: 330px;
                width: 100%;
                margin: auto;
                margin-bottom: 8px;
                height: auto;

                .cloud-grid-text {
                    width: 80%;
                    margin-bottom: 12px;
                }
            }

        padding: 0;
    }

    .row {
        margin: 0;
        //display: inline-block;
    }

    .launch-grid-title {
        color: #232F3E;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 18px;
        line-height: 22px;

        @media (max-width: 828px) {
            text-align: center;
        }
    }

    // .cloud-grid-left {
    //     float: left;
    // }

    // .cloud-grid-right {
    //     float: right;
    // }

    #right-cloud-col {
        @media (min-width: 819px) {
            float: right;
        }
    }

    .cloud-col {
        display: inline-block;
        margin-right: 20px;

        @media (max-width: 776px) {
            display: block;
        }
    }

    .cloud-grid-item {
        height: 100px;
        width: 280px;
        border: 1px solid #E1E1E1;
        border-radius: 5px;
        display: block;
        margin-bottom: 12px;
        position: relative;

        .platforms-container {
            position: absolute;
            top: 5px;
            right: 5px;

            .platform-logo {
                height: 15px;
            }
        }
    }

    .cloud-grid-item:hover {
        border-color: #FF9900;
    }
}

    /*.cloud-grid-item-left {
        float: left;
    }

    .cloud-grid-item-right {
        float: right;
    }*/

    .cloud-grid__title {
        color: #FF9900;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        font-weight: bold;
        line-height: 20px;
        border: none;
        margin: 12px 0 0 18px;
        padding: 0;
    }

    .cloud-grid__excerpt {
        color: #828282;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 12px;
        line-height: 15px;
        margin-left: 18px;
        margin-top: 3px;
    }

    .utility-modules-grid {
        //margin-right: 100px;
        //margin-top: 50px;  
        padding: 0;

        @media (min-width: 1194px) {
            float: right;
        }
    }

    .grid-icon {
        height: 32px;
        width: 30px;
        margin: 14px 0 0 16px;
        display: inline-block;
    }

    .cloud-grid-text {
        display: inline-block;
        width: 210px;
        height: 80px;
    }

    #library-header {
        max-width: 563px;
    }

    #install-header {
        max-width: 563px;
    }

    .image-container {
        #library-auth {
            margin-top: 43px;
            @media (max-width: 828px) {
                margin-top: 40px;
            }
        }

        #library-chat {
            @media (max-width: 828px) {
                display: none;
            }

            float: right;
            //margin-right: 100px;
            margin-top: -90px;

            @media (max-width: 1102px) {
                margin-top: 20px;
            }
        }
    }

    .install-container{
        //margin-left: 100px;
        

        .install-box {
            vertical-align: top;
            height: 250px;
            width: 218px;
            border-radius: 5px;
            display: inline-block;
            //margin-right: 33px;
            color: #FFFFFF;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1.06px;
            line-height: 20px;
            text-align: center;
            margin-bottom: 44px;
            margin-right: 31px;

            @media (max-width: 828px) {
                height: 176px;
                width: 140px;
                margin-right: 10px;
                margin-bottom: 18px;
                line-height: 18px;
            }

            @media (max-width: 372px) {
                width: 80%;
                margin-left: auto !important;
                margin-right: auto !important;
                display: block;
            }
        }

        .install-text {
            max-width: 135px;
            margin: auto;
            margin-top: 24px;

            @media (max-width: 828px) {
                margin-top: 8px;
            }
        }

        .install-button {
            background-color: white;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 1.8px;
            line-height: 18px;
            text-align: center;
            height: 44px;
            width: 192.26px;
            border-radius: 4px;
            box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.3);
            margin-top: 32px;
            text-transform: uppercase;

            @media (max-width: 828px) {
                width: 126px;
                font-size: 13px;
                line-height: 17px;
                margin-top: 16px !important;
                height: 34px;
                letter-spacing: 0.93px;
            }
        }

        #js-box {
            background-color: #FF9900;
        }
        #js-btn {
            color: #FF9900;
        }
        #react-box {
            background-color: #45C5E6;

            @media (max-width: 566px) {
                margin-right: 0;
            }
        }
        #react-btn {
            color: #45C5E6;
            margin-top: 26px;
        }
        #react-native-box {
            background-color: #007BB2;
        }
        #react-native-btn {
            color: #007BB2;
            margin-top: 26px;
        }
        #angular-box {
            background-color: #C3002F;
            margin-right: 0;
        }
        #angular-btn {
            color: #C3002F;
            margin-top: 30px;
        }

        .logo-lg {
            margin-top: 21px;
            
            @media (max-width: 828px) {
                margin-top: 15px;
                height: 48px;
            }
        }
    }
    
    #view-all-platforms-btn {
        height: 50px;
        width: 280px;
        
        @media (max-width: 828px) {
            width: auto !important;
            padding: 0 30px !important;
        }
    }

    .above-code-block {
        color: #828282;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 10px;
        width: 100%;
        display: block;
    }
}

.not-top-section {
    padding-bottom: 50px;

    @media (max-width: 828px) {
        padding-bottom: 40px;
    }
}

#bottom-section {
    margin-bottom: 100px;

    @media (max-width: 828px) {
        margin-bottom: 30px;
    }
}

body {
    background-color: #F3F3F3;
    overflow-x: hidden;
}

.install-amplify-cli {
    @media (max-width: 828px) {
        height: 50px;
        width: 95%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

.hero-subheader {
	@media (min-width: 828px) {
        //padding: 9.375rem 0 (15.3125rem - 1.25rem) 0;
        padding-top: 130px;
    }
}

/* ----- Title ----- */
.hero-subheader__title {
    height: 168px;
    //width: 660px;
    color: #FFFFFF;
    font-family: "Amazon Ember", "Helvetica", sans-serif;
    font-size: 50px;
    font-weight: bold;
    line-height: 56px;
    //margin-left: 110px;
}

/* ----- Title ----- */
.hero-subheader__desc {
	margin-bottom: 1.875rem;
	font-size: 1.3rem;
	color:white;
}

/* ----- Author ----- */
.hero-subheader__author {
	border-left: 2px solid;
	padding-left: 2.5rem;

	.btn {
		margin-bottom: 0;
	}
}

.hero-subheader__author-title {
	font-size: $font-size-h5;
}

/* ----- More ----- */
.hero-subheader__btn-more {
	color: inherit;
}
.marketing-grid {
    @media (max-width: 828px) {
        //margin-bottom: 0 !important;

        .marketing-grid-item {
            .marketing-grid__title {
                font-size: 18px !important;
                line-height: 23px !important;
                margin-bottom: 8px !important;
            }
            .marketing-grid__excerpt {
                font-size: 14px !important;
                line-height: 20px !important;
                margin-bottom: 4px !important;
            }
        }
    }

    margin-bottom: 50px;
    //margin-top: 30px;
    // .col-sm-6 {
    //     max-width: 340px;
    // }

    .marketing-grid-item {
        .marketing-grid__icon {
            max-width: 43%;
            display: block;
            margin: auto;
        }
        .marketing-grid-content {
            display: block;
            margin: auto;
            width: 90%;

            .marketing-grid__title {
                color: #232F3E;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 21px;
                font-weight: bold;
                line-height: 26px;
                padding-bottom: 0;
            }
            .marketing-grid__excerpt {
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 16px;
                line-height: 24px;
                margin-bottom: 4px;
                color: #232F3E;
            }
        }
        li {
            margin: 0;

            a {
                border: none;
            }
        }
    }
}

.notification-bar {
    @media (max-width: 828px) {
        display: none !important;
    }

    //display: block;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    width: 100%;
    background-color: #31465F;
    //width: 101%;
    //display: block;
    z-index: 1000;

    .close-button {
        position: absolute;
        right: 10px;
        top: 9px;

        i {
            margin-right: 0;
        }
    }

    .icon--x {
        vertical-align: text-top;
        color: white;
        cursor: pointer;
    }

    .notification-content {
        margin-top: 8px;
        width: 95%;
        display: inline-block;
        text-align: center;

        .notification-text {
            color: #FFFFFF;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 16px;
            line-height: 24px;
            display: inline-block;
        }
        img {
            display: inline-block;
            vertical-align: middle;
        }
    }

    a {
        border: none;
    }

    // .col-xs-4 {
    //     width: 38%;
    // }
    // .col-xs-8 {
    //     width: 62%;
    // }
}

li {
    /*margin-left: 17px;
    padding-left: 0 !important;
    content: none !important;
    list-style-type: disk !important;*/
    a {
        color: #007EB9;
    }
}

.error-btn-icon {
    line-height: 55px;
}

.error-btn-text {
    line-height: 60px;
}


//=============================================================================
/***                   new stuff for developer guide                       ***/
//=============================================================================

.page-container {
    max-width: 1180px;
    width: 90%;
    margin: auto;

    @media (max-width: 828px) {
        width: 100% !important;
    }

    .section-top {
        max-width: 1180px;
        width: 100%;
    }

    .container {
        //padding: 0;
        width: 100%;
    }

    .row {
        padding: 0;
    }

    .section-category {
        // width: 1180px;
        // max-width: 90%;
        margin: auto;
        padding-bottom: 0;

        @media (max-width: 828px) {
            padding-bottom: 10px;
        }

        .container {
            

            .dev-guide-heading {

                .dev-guide__title {
                    color: #232F3E;
                    font-family: "Amazon Ember", "Helvetica", sans-serif;
                    font-size: 42px;
                    font-weight: 300;
                    line-height: 53px;
                    margin-top: 60px;
                    margin-bottom: 60px;

                    @media (max-width: 828px) {
                        margin-top: 80px;
                        font-size: 30px;
                        line-height: 34px;
                        width: 65%;
                        margin-left: auto;
                        margin-right: auto;
                        text-align: center;
                        margin-bottom: 0;
                    }
                }

                .dev-guide__excerpt {
                    color: #828282;
                    font-family: "Amazon Ember", "Helvetica", sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    margin-bottom: 45px;

                    @media (max-width: 828px) {
                        font-size: 14px;
                        line-height: 20px;
                        text-align: center;
                        margin-bottom: 25px;
                    }
                }
            }
        }
    }

    .section-top-category {
        margin: 0;

        @media (max-width: 828px) {
            margin: auto;
        }

        .header {
            //padding: 0 20px;
            //margin-top: 68px;

            @media (max-width: 828px) {
                margin-top: 0;
                padding: 0;
            }
        }

        .subheader {
            //padding: 0 20px;

            @media (max-width: 828px) {
                padding: 0;
            }
        }

        .container {
            width: 85%;
            margin: auto;
            margin-bottom: 30px;

            .row {
                margin-bottom: 68px;

                @media (max-width: 828px) {
                    margin-bottom: 0 !important;
                    padding-bottom: 30px;
                }
            }
        }

        .col-xs-12 {
            margin-top: 2%;
            padding: 0 20px;

            @media (max-width: 828px) {
                padding: 0;
            }
        }

        .dev-guide-item {
            padding: 23px 16px 20px 16px;
            border: 1px solid #E1E1E1;
            border-radius: 5px;
            display: inline-block;
            width: 100%;
            //height: 180px;

            @media (max-width: 828px) {
                height: auto;
                padding: 13px 0 12px 10px;
            }

            .dev-guide-icon {
                width: 31px;
                position: absolute;
                top: 10px;
                right: 32px;

                @media (max-width: 828px) {
                    height: 19px;
                    width: 18px;
                    top: 6px;
                    right: 6px;
                }
            }

            .dev-guide-logo {
                width: 48px;
                position: absolute;
                top: 12px;
                right: 12px;
            }

            .tutorials-content {
                margin-bottom: 0 !important;
            }

            .dev-guide-content {
                float: left;
                margin-bottom: 20px;
                width: 94%;

                @media (max-width: 828px) {
                    margin-bottom: 0;
                }

                .dev-guide-title {
                    color: #FF9900;
                    font-family: "Amazon Ember", "Helvetica", sans-serif;
                    font-size: 20px;
                    font-weight: bold;
                    line-height: 25px;
                    margin-bottom: 13px;

                    @media (max-width: 828px) {
                        font-size: 16px;
                        line-height: 20px;
                    }
                }

                .dev-guide-by {
                    color: gray;
                    font-size: 13px;
                    margin-top: -15px;
                    margin-bottom: 10px;
                }

                .dev-guide-excerpt {
                    color: #828282;
                    font-family: "Amazon Ember", "Helvetica", sans-serif;
                    font-size: 14px;
                    line-height: 18px;

                    @media (max-width: 828px) {
                        font-size: 12px;
                        line-height: 15px;
                    }
                }
            }

            .services-container {
                position: absolute; 
                bottom: 0;
                width: 270px;
                max-width: 75%;

                .dev-guide-services {
                    color: #828282;
                    font-family: "Helvetica Neue";
                    font-size: 11px;
                    font-style: italic;
                    line-height: 16px;
                    position: absolute;
                    bottom: 23px;

                    @media (max-width: 828px) {
                        display: none;
                    }
                }
            }
            #angular-logo {
                width: 58px;
                top: 0;
                right: 19px;

                @media (max-width: 828px) {
                    right: 0;
                    width: 40px;
                    height: auto;
                }
            }

            #react-logo {
                width: 54px;
                top: 6px;
                right: 24px;

                @media (max-width: 828px) {
                    right: 2px;
                    width: 36px;
                    height: auto;
                }
            }

            #react-native-logo {
                width: 54px;
                top: 6px;
                right: 24px;

                @media (max-width: 828px) {
                    right: 2px;
                    width: 36px;
                    height: auto;
                }
            }

            #vuejs-logo {
                width: 43px;
                top: 8px;
                right: 26px;

                @media (max-width: 828px) {
                    right: 0;
                    width: 40px;
                    height: auto;
                }
            }

            #ionic-logo {
                width: 43px;
                top: 8px;
                right: 26px;

                @media (max-width: 828px) {
                    right: 0;
                    width: 40px;
                    height: auto;
                }
            }
        }

        .dev-guide-item:hover {
            border-color: #FF9900;
        }
    }
}

//=============================================================================
/***                   new stuff for get started home                      ***/
//=============================================================================

#learn-more-about-cli-box {
    display: inline-block;
    //margin-left: 80px;
    margin-bottom: 40px;

    @media (max-width: 828px) {
        display: block;
        width: 226px;
        margin: auto;
        margin-top: 10px;
        margin-left: 0;
    }
}

#node-link:hover {
    text-decoration: underline;
}

#npm-link:hover {
    text-decoration: underline;
}

.amplify-link-box {
    margin-bottom: 20px;
}

.amplify-link {
    color: #FF9900;
    font-family: "Amazon Ember", "Helvetica", sans-serif;
    font-size: 16px;
    line-height: 24px;
    display: inline-block;
}

.amplify-link:hover {
    text-decoration: underline;
}

.down-arrow {
    display: inline-block;
    vertical-align: middle;
    margin-left: 13px;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
    border-radius: 100%;
}

.side-arrow {
    position: relative;
    right: 5px;
    display: inline-block;
    vertical-align: middle;
    //margin-left: 13px;
    //box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
    border-radius: 100%;
    transform: rotate(-90deg);
}

.from-awsmobile {
    display: inline-block;
    position: relative;
    left: 15px;
    max-width: 1180px;
    font-family: "Amazon Ember", "Helvetica", sans-serif;

    @media (min-width: 829px) {
        bottom: 30px;
        width: calc(100% - 30px);
    }
    @media (max-width: 828px) {
        top: 15px;
        left: calc(2.5% + 15px);
        width: calc(95% - 30px);
    }
}

.video {
    float: right;
}

.section-top-quickstart {
    margin-top: 0;
    margin-bottom: 34px;

    .section-code-block {
        width: 100%;
        padding-bottom: 25px;

        .highlight {
            width: 100%;
            .highlight {
                padding-bottom: 10px;
            }
        }
    }

    .cli-content {
        display: inline-block;
        width: 50%;

        div {
            float: left;
        }
        ul {
            float: left;
        }
        p {
            float: left;
        }

        @media (max-width: 1219px) {
            width: 90%;

            div {
                float: none;
            }
            ul {
                float: none;
            }
            p {
                float: none;
            }
        }
    }

    .video {
        @media (max-width: 1219px) {
            display: none;
        }
    }

    #orange-logos {
        width: 220px;
    }

    .div-number {
        width: 47px;
        border-radius: 100%;
        position: absolute;
        top: 19px;
        right: 23px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.23);
        background: linear-gradient(180deg, #FFBC00 0%, #FF9900 100%);
        border: 2px solid #FFFFFF;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        color: white;
        font-size: 22px;
        font-weight: bold;
        line-height: 43px;
        text-align: center;

        @media (max-width: 828px) {
            width: 37px;
            line-height: 34px;
            font-size: 22px;
            top: 10px;
            right: 10px;
        }
    }

    .install-node-block {
        @media (min-width: 1014px){
            position: relative;
            vertical-align: top;
            left: 36px;
            top: 15px;
        }

        p {
            margin-bottom: 20px !important;
        }
    }

    #aws-logo {
        width: 260px;
        position: relative;
        float: right;
        bottom: 280px;
        margin-bottom: -130px;

        @media (min-width: 1000px) {
            right: 50px;
        }

        @media (max-width: 785px) {
            display: none;
        }
    }

    a {
        border: none;
    }

    .btn {
        padding: 0 31px;
        width: 100%;

        @media (max-width: 828px) {
            font-size: 12px;
            line-height: 15px;
            padding: 0 16px !important;
            height: 46px;
            margin: auto;
            display: block;
        }
    }

    #aws-signup-btn {
        padding: 0 50px;
        width: auto !important;
        //margin-right: 25px;

        @media (max-width: 828px) {
            display: inline-block;
            margin: 0 25px 30px 0 !important;
            padding: 0 34px !important;
        }
    }

    .container {
        .row {
            margin-bottom: 78px;

            .subheader {
                padding: 0;
                margin: 0;
            }

            #get-started-header {
                margin-bottom: 0;
            }

            .row-title {
                max-width: 90%;

                @media (max-width: 828px) {
                    max-width: 100%;
                }
                
                .title {             
                    color: #232F3E;
                    font-family: "Amazon Ember", "Helvetica", sans-serif;
                    font-size: 21px;
                    font-weight: bold;
                    line-height: 26px;
                    margin-bottom: 10px;

                    @media (max-width: 828px) {
                        font-size: 18px;
                        line-height: 21px;
                    }
                }
                .subtitle {
                    color: #828282;
                    font-family: "Amazon Ember", "Helvetica", sans-serif;
                    font-size: 16px;
                    line-height: 24px;
                    margin-bottom: 34px;

                    @media (max-width: 828px) {
                        margin-bottom: 16px;
                    }
                }
            }

            .platform-container {

                @media (max-width: 828px) {
                    margin-bottom: 30px;
                }

                .platform-box {
                    display: inline-block;
                    margin-right: 35px;
                    width: 180px;

                    @media (max-width: 828px) {
                        width: 49%;
                        margin: auto;
                        padding: 4px;
                        margin-bottom: 12px;
                    }

                    .circle-badge {
                        margin: auto;
                        margin-bottom: 18px;
                        display: block;
                        width: 112px;

                        @media (max-width: 828px) {
                            margin-bottom: 12px;
                            width: 76px;
                        }
                    }

                    .platform-title {
                        color: #232F3E;
                        font-family: "Amazon Ember", "Helvetica", sans-serif;
                        font-size: 16px;
                        font-weight: bold;
                        letter-spacing: 1.06px;
                        line-height: 20px;
                        text-align: center;
                        width: 61%;
                        margin: auto;
                        margin-bottom: 14px;

                        @media (max-width: 828px) {
                            line-height: 18px;
                            width: 85%;
                            letter-spacing: 1.06px;
                        }
                    }
                }
            }
        }
    }
}


//=============================================================================
/***                        new stuff for docs header                      ***/
//=============================================================================

.docs-header {
    background-color: #FF9900;

    .site-search {
        background-color: #F4F4F4;

        #search-input {
            background-color: #F4F4F4;
        }
        #search-input:focus {
            outline: none;
        }
    }

    .site-header__nav {
        width: auto;

        @media (max-width: 882px) {
            margin-top: 8px !important;
        }

        .docs-nav:hover {

            a {
                border-bottom: 2px solid white;
                transition: border-color 0.2s;
            }
        }

        .dropbtn:hover{
            border-bottom: 2px solid white;
            transition: border-color 0.2s;
        }
    }
    
    .language-selector {
        border-radius: 4px;
        background-color: #E57E00;
        display: inline-block;
        margin-left: 50px;
        width: 193px;
        display: none;

        select {
            //background: url("/images/icons/Minis/Arrows.svg") no-repeat;
            background-position: 164px 6px;
            filter: brightness(0) invert(1);
            border: 0 !important;                 /*Removes border*/
            -webkit-appearance: none;             /*Removes default chrome and safari style*/
            -moz-appearance: none;                /* Removes Default Firefox style*/
            text-indent: 0.01px;                  /* Removes default arrow from firefox*/
            text-overflow: "";                    /*Removes default arrow from firefox*/
            padding: 10px;
            width: 100%;
            color: #FFFFFF;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 16px;
            line-height: 24px;
        }

        select:focus {
            outline: none;
        }
    }
}

//=============================================================================
/***                        new stuff for docs pages                       ***/
//=============================================================================

.docs-page-container {
    width: 1180px;
    max-width: 90%;
    margin: auto;

    @media (max-width: 828px) {
        max-width: 95%;              
    }

    .section-top {
        margin-top: 60px;
    }

    ::-webkit-scrollbar {
        height: 0px; 
        width: 2px;
        background: transparent; 
    }

    ::-webkit-scrollbar-thumb {
        background: #FF9900;
    }
    
    .nt {
        color: white;
    }

    .dev-guide-container {
        float: left;
        width: 260px;
        padding: 0;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        margin-top: 60px;

        @media (max-width: 828px) {
            margin-top: 20px;
        }

        .in-this-page {
            margin-top: 10px;

            ul {
                margin-bottom: 4px;
            }
        }

        .sections-list {
            overflow-y: scroll;
            max-height: 90vh;
            background: none;

            @media (max-width: 828px) {
                margin-top: 0;
            }
            
            ul li {
                border: none;
            }
        }

        .sections-list.affix {
            position: sticky;
            position: -webkit-sticky;
            margin-top: 84px;
        }

        .styleguide-affix {
            margin-top: 20px !important;
        }

        .styleguide-affix-notif {
            margin-top: 75px !important;
        }

        .sections-list-notif {
            margin-top: 150px !important;
        }

        .version-section {

            @media (max-width: 828px) {
                margin-bottom: 20px;
            }

            p {
                color: #152939;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 14px;
                letter-spacing: 0.4px;
                line-height: 17px;
                margin-bottom: 8px;
            }

            .version-selector {
                border-radius: 5px;
                border: 1px solid #C4C4C4;
                background-color: #FFFFFF;
                display: inline-block;
                width: 193px;

                @media (max-width: 828px) {
                    width: 274px;
                }
        
                select {
                    //background: url("/images/icons/Minis/Arrows.svg") no-repeat;
                    background-position: 164px 3px;
                    //filter: brightness(0) invert(1);
                    border: 0 !important;                 /*Removes border*/
                    -webkit-appearance: none;             /*Removes default chrome and safari style*/
                    -moz-appearance: none;                /* Removes Default Firefox style*/
                    text-indent: 0.01px;                  /* Removes default arrow from firefox*/
                    text-overflow: "";                    /*Removes default arrow from firefox*/
                    padding: 10px;
                    width: 100%;
                    color: #152939;
                    font-family: "Amazon Ember", "Helvetica", sans-serif;
                    font-size: 14px;
                    letter-spacing: 0.4px;
                    line-height: 17px;

                    @media (max-width: 828px) {
                        padding: 12px;
                        background-position: 240px 5px;
                    }
                }
            }
        }

        .left-nav-section {
            margin-bottom: 20px;
        }

        a:hover {
            text-decoration: underline;
        }

        .gray-section-head {
            color: #B4B4B4;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 13px;
            line-height: 35px;
            text-transform: uppercase;
            margin: 0;
        }

        .orange-section-head {

            color: #FF9900 !important;             
            &::after {
                color: #232F3E !important;
                transform: rotate(0deg) !important;
            }
        }

        .section-head {
            color: #232F3E;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 16px;
            font-weight: bold;
            line-height: 25px;
            padding: 0;
            border-bottom: none;
            display: block;
            max-width: 260px;

            &::after {
                @extend .icon;
                content: '\e91d';
                color: #bdbdbd;
                //display: inline-block;
                font-size: 1.25rem;
                position: relative;
                float: right;
                top: 0;
                //transition: color .5s;
                //transition: transform 0.5s;
                transform: rotate(90deg);
            }
        }

        ul:hover {
            //overflow-x: scroll;
        }

        ul {

            a {
                color: #4A4A4A;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 14px;
                font-weight: bold;
                line-height: 16px;
                max-width: 240px;
                display: block;
                //overflow-x: scroll !important;

                @media (max-width: 828px) {
                    font-weight: normal;
                    line-height: 20px;
                }
            }

            ul {
                margin-top: .625rem;
                margin-bottom: 0;
                color:black;
            }
    
            li {
                padding-bottom: 2px;
                border-left: 1px solid #eee;
                transition: border .2s;
                border-left-color:white;
                line-height: 20px;
                padding-left: 0px;
                margin-bottom: 4px;
    
                &.active {
                    border-left-color: gray;
                }
    
                &.section-link {
                    a {
                        padding-left:11px;
                    }
                }

                &.first-submenu {
                    &::after {
                        top: 8px !important;
                    }
                }
                
                &.has-submenu {
                    //padding-right: 10px;
                    //font-weight: bold;

                    .level-3 {
                        margin-left: 10px;
                        padding-left: 10px;

                        li {
                            border: none;
                        }

                        a {           
                            padding-left: 10px;
                            font-size: 13px;
                            line-height: 15px;
                            //border-left: 2px solid #DBD6D6;
                            font-weight: normal;
                        }
                    }
    
                    .level-4 {
                        padding-left: 10px;
                        margin-left: 20px;
                        //border-left: 2px solid #DBD6D6;
                        a {
                            padding: 0;
                            font-size: 12px;
                            line-height: 14px;
                            border: none;
                            color: #7F7F7F;
                        }
                    }
    
                    > ul {
                        // display: none;
                        // height: 0;
                        // transition: height 2s ease-out;
                        display: block;
                    }
    
                    &.active {
    
                        > ul {
                            height: auto;
                            display: block;
                            //transition: height 2s ease-in;
                        }
                    }
    
    
                }
    
                &::before {
                    display: none;
                }
    
                a {
                    @include link-reset;
                    //font-size:0.9rem;
                    padding-left: 10px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    &:hover {
                        text-decoration: underline;
                    }
                }
    
            }

            .level-2 {
                @media (max-width: 828px) {
                    border-left: 1px solid #CCCCCC;
                }
            }
    
            /*.level-2 {
                li {
                    &.active {
                        border-left-color: gray;
                        margin-left: -2px;
                        padding-left:0px;
                        border-width: 3px;
                        //font-weight: bold;
                    }
                }
            }
    
            .level-3 {
                li {
                    &.active {
                        border-left-color: #585858;
                        margin-left: -3px;
                        padding-left:0px;
                        border-width: 3px;
                    }
                }
            }
    
            .level-4 {
                li {
                    &.active {
                        border-left-color: black;
                        margin-left: -3px;
                        padding-left:0px;
                        border-width: 3px;
                    }
                }
            }*/
    
        }
    }

    .docs-container {
        float: right;
        width: calc(100% - 280px);
        padding: 53px 65px;
        margin-bottom: 20px;

        @media (max-width: 828px) {
            float: left;
            width: 100%;
            padding: 36px 20px;
            max-width: 100% !important;
        }

        .dropbtn {
            color: #828282;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            margin: 5px 10px;
            border: none;
            cursor: pointer;
        }

        .arrows {
            -webkit-appearance: menulist;
            -moz-appearance: menulist;
            display: inline-block;
            width: 12px;
            vertical-align: middle;
            margin-right: 5px;
        }
        
        .dropdown {
            position: relative;
            display: inline-block;
        }
        
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
        
        .dropdown-content a {
            color: #828282;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 16px;
            height: 32px;
            font-weight: 500;
            padding: 4px 10px;
            text-decoration: none;
            display: block;
            border-bottom: none !important;
        
            p {
                display: inline-block;
            }
        }
        
        .dropdown-content a:hover p {
            border-bottom: 2px solid #FF9900;
        }
        
        .dropdown-content a:hover {background-color: #f1f1f1}
        
        .dropdown:hover .dropdown-content {
            display: block;
        }
        
        .dropdown:active .dropdown-content {
            display: block;
        }

        .js-library-selector {
            z-index: 999;
            background-color: #FF9900;
            border-radius: 4px;
            position: absolute;
            top: 53px;
            right: 27px;

            @media (max-width: 828px) {
                position: static;
                margin-bottom: 20px;
                width: 162px;
            }

            img {
                height: 20px;
                left: 4px;
                margin-left: 5px;
                position: relative;
                vertical-align: text-bottom;
                filter: brightness(0) invert(1);
            }
                
            select {
                color: white;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 16px;	
                line-height: 24px;
                margin: 10px;
                border: none;
                background: none;
                filter: brightness(0) invert(1);
                cursor: pointer;
            }
        }

        .js-library-selector-hover {
            background-color: #FFA41D;
            cursor: pointer;
        }
        

        .js-library-selector-text {
            top: 29px;
            right: 27px;
            font-size: 12px;
            color:darkgray;
            position: absolute;

            @media (max-width: 828px) {
                position: static;
            }
        }

        .content {

            .tab-content {
                padding: 0;
            }

            h1 {
                color: #232F3E;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 42px;
                font-weight: 300;
                line-height: 53px;
                margin: 0;
                margin-bottom: 40px;

                @media (max-width: 828px) {
                    font-size: 30px;
                    line-height: 34px;
                    margin-bottom: 28px;
                }
            }

            p {
                color: #828282;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 16px;
                line-height: 24px;

                @media (max-width: 828px) {
                    font-size: 14px;
                    line-height: 20px;
                }
            }

            h2 {
                color: #232F3E;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 21px;
                font-weight: bold;
                line-height: 26px;
                border-bottom: none;
                border-top: 1px solid #E1E4EA;
                padding: 25px 0 0 0;
                margin-top: 48px;
            }

            .orange-subheader {
                color: #FF9900;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 21px;
                font-weight: bold;
                line-height: 26px;

                @media (max-width: 828px) {
                    font-size: 18px;
                    line-height: 23px;
                }
            }

            pre {
                .line-number {
                    display: block;
                    float: left;
                    margin: 0 1em 0 -1em;
                    border-right: 1px solid white;
                    text-align: right;
                    //border: 1px solid #DBDBDB;
                    //border-radius: 5px;
                    //background-color: #F9F9F9;
                    span {
                        display: block;
                        padding: 1px 18px 0 10px;
                        color: white;
                    }
                }
                .cl {
                    display: block;
                    clear: both;
                }

                .code {
                    padding: 20px 0 20px 5px;
                }

                .highlight {
                    padding: 0;
                }
            }
        }
    }
}

//=============================================================================
/***                       new stuff for toolchain page                    ***/
//=============================================================================

.hero-subheader.dark {
    background: none !important;
    background-color: #31465F !important;

    .btn {
        color: #31465F;
    }
}

.section-top.cli {
    .marketing-content {
        width: 40%;
        margin-bottom: 10px;

        @media (max-width: 1130px) {
            width: 80%;
            margin-bottom: 0;
        }

        @media (max-width: 828px) {
            width: 100%;
            margin-top: 0;
        }

        .marketing-grid__title {
            color: #232F3E;
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 21px;
            font-weight: bold;
            line-height: 26px;
            padding-bottom: 0;
            border-bottom: none;
        }
        .marketing-grid__excerpt {
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 4px;
        }
    }   

    .integrate-content {
        width: 60%;
        margin-bottom: 50px;

        @media (max-width: 828px) {
            width: 100%;
        }

        .marketing-grid__excerpt {
            font-family: "Amazon Ember", "Helvetica", sans-serif;
            font-size: 16px;
            line-height: 24px;
            margin-bottom: 4px;
        }
    }

    .toolchain-code-block {
        float: right;
        width: 360px;

        pre {
            @media (min-width: 829px) {
                overflow-x: hidden;
            }
        }
    }

    .logo-container {
        display: block;
        margin-bottom: 30px;

        .logo-box {
            display: inline-block;
            margin: 0;
            text-align: center;
            width: 19%;

            .logo-title {
                color: #232F3E;
                font-family: "Amazon Ember", "Helvetica", sans-serif;
                font-size: 16px;
                letter-spacing: 1.06px;
                line-height: 20px;
                text-align: center;
            }
        }
    }

    .button-container {
        display: inline-block;
        .top-section-btn {
            margin-bottom: 100px;
            margin-right: 20px;
        }
    }

    #code-window {
        float: right;
        position:  relative;
        width: 390px;
        bottom: 276px;
        left: 20px;
        margin-bottom: -230px;
    }

    #orange-logos {
        width: 220px;

        @media (max-width: 1130px) {
            margin-bottom: 40px;
        }
    }

    #pages {
        width: 218px;
        float: right;
        position:  relative;
        bottom: 205px;
        margin-bottom: -205px;

        @media (max-width: 836px) {
            bottom: 450px;
            margin-bottom: -450px;
        }
    }

    #cli-much-more:hover {
        text-decoration: underline;
    }
}

//=============================================================================
/***                        new stuff for style guide                      ***/
//=============================================================================

#styleguide-section {
    background-color: #F6F6F5
}

.styleguide-container {
    background: none;
    box-shadow: none;
    padding: 0 !important;
    float: none !important;
    display: inline-block;
    width: calc(100% - 230px) !important;

    @media (max-width: 1023px) {
        overflow: scroll;
    }

    @media (max-width: 828px) {
        //width: calc(100% - 140px) !important;
        width: 100% !important;
    }

    .ui-section {
        border-bottom: 1px solid #232F3E;
    }

    h1 {
        font-size: 50px !important;
    }

    h2 {
        color: #232F3E !important;
        font-family: "Amazon Ember", "Helvetica", sans-serif !important;
        font-size: 42px !important;	
        font-weight: 300 !important;	
        line-height: 53px !important;
        border-top: none !important;
        border-bottom: 1px solid #E1E4EA !important;
        padding: 20px 0 20px 0 !important;
        margin-top: 0 !important;
    }

    h3 {
        color: #232F3E !important;
        font-family: "Amazon Ember", "Helvetica", sans-serif !important;
        font-size: 21px !important;
        font-weight: bold !important;
        line-height: 26px !important;
        margin-top: 50px;
    }

    p {
        margin-bottom: 20px;
        color: #232F3E !important;
        display: inline-block;
        max-width: 100%;
    }

    img {
        //max-width: none;
    }

    .title {
        color: #828282;	
        font-family: "Amazon Ember", "Helvetica", sans-serif;	
        font-size: 12px;	
        font-weight: bold;	
        line-height: 15px;
        display: block;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    .excerpt {
        margin-bottom: 16px;
    }

    .inline-img {
        display: inline-block;
        margin-right: 62px;
        margin-bottom: 40px;
    }

    .btn-img {
        margin-right: 50px;

        .btn-colors {
            @media (min-width: 1306px) {
                margin-top: 45px;   
            }
        }

        #critical-action-btn-colors {
            width: 163px;
        }
    }

    .font-link {
        color: #828282;	
        font-family: "Proxima Nova";	
        font-size: 14px;	
        font-style: italic;	
        letter-spacing: 0.49px;	
        line-height: 16px;
        display: block;
    }

    .font-specific {
        color: #232F3E;
        font-family: "Amazon Ember", "Helvetica", sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: bold;
        display: block;
    }

    .font-example {
        float: right;
        width: 66%;
    }

    .font-example-div {
        display: inline-block;
        margin-bottom: 20px;
    }

    #h1 {
        font-size: 50px;	
        font-weight: bold;	
        line-height: 60px;
        margin-top: -12px;
    }

    #h2 {
        font-size: 42px;	
        font-weight: 300;	
        line-height: 53px;
        margin-top: -10px;
    }

    #h4 {
        font-size: 28px;	
        font-weight: 300;	
        line-height: 35px;
        margin-top: -8px;
    }

    #h5 {
        font-size: 20px;	
        font-weight: bold;	
        line-height: 25px;
        margin-top: -4px;
    }

    #p {
        font-size: 16px;	
        line-height: 24px;
    }

    .inline-div {
        display: inline-block;
        max-width: 100%;
    }

    #dropdowns {
        @media (min-width: 1246px) {
            float: right;
        }
    }

    #tooltips {
        @media (min-width: 1248px) {
            margin-left: 63px;
        }
    }

    #recover-user {
        width: 483px;
        @media (min-width: 1312px) {
            float: right;

            .inline-img {
                float: right;
            }

            #recover-user-title {
                margin-left: 18px;
            }
        }
    }

    #message-chat {
        @media (min-width: 1178px) {
            float: right;
            margin-right: 50px;
        }
    }

    #new-user-mobile-keyboard {
        @media (min-width: 1184px) {
            position: relative;
            bottom: 490px;
            margin-bottom: -490px;
        }
    }

    .statusbar-img {
        margin-bottom: 10px;
    }

    .small-right-margin {
        margin-right: 11px;
    }

    .no-right-margin {
        margin-right: 0px;
    }

    .statusbar-text {
        display: block;
        color: #4A4A4A; 
        font-size: 13px;	
        line-height: 18px;
        width: 373px;
        margin-bottom: 40px;
    }

    .mobile-right-margin {
        margin-right: 72px;
    }

    .separator {
        border-bottom: 1px solid #E1E4EA;
        width: 100%;
    }
}

.styleguide-nav {
    width: 230px !important;
    top: 80px !important;

    @media (max-width: 828px) {
        width: 140px !important;
    }
    
    .sections-list {
        margin-top: 30px;
    }

    li {
        .style-category {
            color: #828282 !important;
            font-family: "Amazon Ember", "Helvetica", sans-serif !important;
            font-size: 28px !important;
            font-weight: 300 !important;
            line-height: 35px !important;
            display: block !important;
            margin-bottom: 20px !important;
            text-decoration: none !important;

            @media (max-width: 828px) {
                font-size: 20px !important;
                line-height: 24px !important;
            }
        }
        &.active {
            .style-category {
                color: #232F3E !important;
            }     
        }
    }
}

.relative {
    position: relative;
}

.docs-header {
    #search-input-xs {
        right: -12px;
        top: -1px;
    }
}

#docs-edit-bar {
    position: absolute;
    right: 0;
    top: 62px;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0,0,0,.3);
    height: 30px;
    padding: 0px 10px;

    @media (max-width: 998px) {
        top: 99px;
    }

    a {
        display: inline-block;
        padding: 0 5px;

        p {
            display: inline-block;
            color: #232F3E;
            margin: 0;
        }

        img {
            height: 24px;
            vertical-align: middle;
            filter: opacity(75%);
        }
    
        #twitter-logo {
            height: 28px;
            position: relative;
            bottom: 2px;
            left: 5px;
            filter: brightness(0) opacity(75%);
        }
    }

    a:hover {
        p {
            color: #FF9900;
        }
    }
}