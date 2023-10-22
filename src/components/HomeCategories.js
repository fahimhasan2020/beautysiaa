import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useState,memo} from 'react'
import { sizes } from '../constants'
import {Svg,Path} from 'react-native-svg'
const categories = [
    {
        id:0,
        categoryId:0,
        name:'Facewash',
        icon: <Svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
        <Path d="M4.01459 11.4602C4.51668 10.3724 4.76772 9.95395 5.26982 9.03345" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.77617 18.9918C4.60044 18.9918 2.84314 17.2344 2.84314 15.0587" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.136 14.9749C13.136 16.0628 12.8849 17.067 12.3828 17.9038C11.295 19.9122 9.20292 21.2511 6.77614 21.2511C3.2615 21.2511 0.5 18.4059 0.5 14.9749C0.5 11.544 6.77614 1.08374 6.77614 1.08374C6.77614 1.08374 9.11924 4.93311 10.9602 8.78248C12.1318 11.2093 13.136 13.636 13.136 14.9749Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M20.5 13.1339C20.5 16.1464 18.0732 18.5732 15.0607 18.5732C14.0565 18.5732 13.136 18.3221 12.3829 17.9037C12.885 17.0669 13.136 16.0627 13.136 14.9749C13.136 13.636 12.1318 11.2092 10.9603 8.69873C12.5502 5.10041 15.0607 1 15.0607 1C15.0607 1 20.5 10.1213 20.5 13.1339Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.136 9.28443C13.5545 8.36393 13.8055 7.94552 14.2239 7.19238" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>,
        iconActive:<Svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
        <Path d="M4.01459 11.4602C4.51668 10.3724 4.76772 9.95395 5.26982 9.03345" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.77617 18.9918C4.60044 18.9918 2.84314 17.2344 2.84314 15.0587" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.136 14.9749C13.136 16.0628 12.8849 17.067 12.3828 17.9038C11.295 19.9122 9.20292 21.2511 6.77614 21.2511C3.2615 21.2511 0.5 18.4059 0.5 14.9749C0.5 11.544 6.77614 1.08374 6.77614 1.08374C6.77614 1.08374 9.11924 4.93311 10.9602 8.78248C12.1318 11.2093 13.136 13.636 13.136 14.9749Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M20.5 13.1339C20.5 16.1464 18.0732 18.5732 15.0607 18.5732C14.0565 18.5732 13.136 18.3221 12.3829 17.9037C12.885 17.0669 13.136 16.0627 13.136 14.9749C13.136 13.636 12.1318 11.2092 10.9603 8.69873C12.5502 5.10041 15.0607 1 15.0607 1C15.0607 1 20.5 10.1213 20.5 13.1339Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.136 9.28443C13.5545 8.36393 13.8055 7.94552 14.2239 7.19238" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    },
    {
        id:1,
        categoryId:0,
        name:'Serum',
        icon: <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <Path d="M10.7373 9.56421H6.6275V16.7377H10.7373V9.56421Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.7371 20.2498H0.5V8.06988C0.5 7.02375 1.39666 6.12708 2.44279 6.12708H8.79429C9.84042 6.12708 10.7371 7.02375 10.7371 8.06988V20.2498Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.04728 6.12725H3.19025V2.46578C4.83416 1.94272 6.40336 1.94272 8.04728 2.46578V6.12725Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.8864 4.93179C11.3817 4.93179 11.7831 4.53033 11.7831 4.03511C11.7831 3.53988 11.3817 3.13843 10.8864 3.13843C10.3912 3.13843 9.98975 3.53988 9.98975 4.03511C9.98975 4.53033 10.3912 4.93179 10.8864 4.93179Z" fill="#DE0C77"/>
        <Path d="M13.2028 3.21292C13.6981 3.21292 14.0995 2.81146 14.0995 2.31624C14.0995 1.82101 13.6981 1.41956 13.2028 1.41956C12.7076 1.41956 12.3062 1.82101 12.3062 2.31624C12.3062 2.81146 12.7076 3.21292 13.2028 3.21292Z" fill="#DE0C77"/>
        <Path d="M13.2028 6.57546C13.6981 6.57546 14.0995 6.17401 14.0995 5.67878C14.0995 5.18356 13.6981 4.7821 13.2028 4.7821C12.7076 4.7821 12.3062 5.18356 12.3062 5.67878C12.3062 6.17401 12.7076 6.57546 13.2028 6.57546Z" fill="#DE0C77"/>
        <Path d="M15.4445 4.93179C15.9397 4.93179 16.3412 4.53033 16.3412 4.03511C16.3412 3.53988 15.9397 3.13843 15.4445 3.13843C14.9493 3.13843 14.5478 3.53988 14.5478 4.03511C14.5478 4.53033 14.9493 4.93179 15.4445 4.93179Z" fill="#DE0C77"/>
        <Path d="M15.5196 1.79337C16.0148 1.79337 16.4163 1.39192 16.4163 0.896691C16.4163 0.401467 16.0148 0 15.5196 0C15.0244 0 14.6229 0.401467 14.6229 0.896691C14.6229 1.39192 15.0244 1.79337 15.5196 1.79337Z" fill="#DE0C77"/>
        <Path d="M15.5196 8.07022C16.0148 8.07022 16.4163 7.66876 16.4163 7.17354C16.4163 6.67831 16.0148 6.27686 15.5196 6.27686C15.0244 6.27686 14.6229 6.67831 14.6229 7.17354C14.6229 7.66876 15.0244 8.07022 15.5196 8.07022Z" fill="#DE0C77"/>
        </Svg>,
        iconActive:<Svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <Path d="M10.7373 9.56421H6.6275V16.7377H10.7373V9.56421Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.7371 20.2498H0.5V8.06988C0.5 7.02375 1.39666 6.12708 2.44279 6.12708H8.79429C9.84042 6.12708 10.7371 7.02375 10.7371 8.06988V20.2498Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.04728 6.12725H3.19025V2.46578C4.83416 1.94272 6.40336 1.94272 8.04728 2.46578V6.12725Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.8864 4.93179C11.3817 4.93179 11.7831 4.53033 11.7831 4.03511C11.7831 3.53988 11.3817 3.13843 10.8864 3.13843C10.3912 3.13843 9.98975 3.53988 9.98975 4.03511C9.98975 4.53033 10.3912 4.93179 10.8864 4.93179Z" fill="white"/>
        <Path d="M13.2028 3.21292C13.6981 3.21292 14.0995 2.81146 14.0995 2.31624C14.0995 1.82101 13.6981 1.41956 13.2028 1.41956C12.7076 1.41956 12.3062 1.82101 12.3062 2.31624C12.3062 2.81146 12.7076 3.21292 13.2028 3.21292Z" fill="white"/>
        <Path d="M13.2028 6.57546C13.6981 6.57546 14.0995 6.17401 14.0995 5.67878C14.0995 5.18356 13.6981 4.7821 13.2028 4.7821C12.7076 4.7821 12.3062 5.18356 12.3062 5.67878C12.3062 6.17401 12.7076 6.57546 13.2028 6.57546Z" fill="white"/>
        <Path d="M15.4445 4.93179C15.9397 4.93179 16.3412 4.53033 16.3412 4.03511C16.3412 3.53988 15.9397 3.13843 15.4445 3.13843C14.9493 3.13843 14.5478 3.53988 14.5478 4.03511C14.5478 4.53033 14.9493 4.93179 15.4445 4.93179Z" fill="white"/>
        <Path d="M15.5196 1.79337C16.0148 1.79337 16.4163 1.39192 16.4163 0.896691C16.4163 0.401467 16.0148 0 15.5196 0C15.0244 0 14.6229 0.401467 14.6229 0.896691C14.6229 1.39192 15.0244 1.79337 15.5196 1.79337Z" fill="white"/>
        <Path d="M15.5196 8.07022C16.0148 8.07022 16.4163 7.66876 16.4163 7.17354C16.4163 6.67831 16.0148 6.27686 15.5196 6.27686C15.0244 6.27686 14.6229 6.67831 14.6229 7.17354C14.6229 7.66876 15.0244 8.07022 15.5196 8.07022Z" fill="white"/>
        </Svg>
    },
    {
        id:2,
        categoryId:0,
        name:'Cream',
        icon: <Svg xmlns="http://www.w3.org/2000/svg" width="8" height="22" viewBox="0 0 8 22" fill="none">
        <Path d="M7.15801 20.9221H0.5V12.2735C0.5 11.6558 0.980459 11.1753 1.59821 11.1753H6.05977C6.67753 11.1753 7.15801 11.6558 7.15801 12.2735V20.9221Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M0.705811 13.5089H7.02064" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.47172 5.95862H1.25513V11.1752H6.47172V5.95862Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M5.64781 5.9585H2.07855V2.45788L4.89277 0.741899C5.23597 0.535981 5.64781 0.810547 5.64781 1.22238V5.9585Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>,
        iconActive:<Svg xmlns="http://www.w3.org/2000/svg" width="8" height="22" viewBox="0 0 8 22" fill="none">
        <Path d="M7.15801 20.9221H0.5V12.2735C0.5 11.6558 0.980459 11.1753 1.59821 11.1753H6.05977C6.67753 11.1753 7.15801 11.6558 7.15801 12.2735V20.9221Z" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M0.705811 13.5089H7.02064" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.47172 5.95862H1.25513V11.1752H6.47172V5.95862Z" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M5.64781 5.9585H2.07855V2.45788L4.89277 0.741899C5.23597 0.535981 5.64781 0.810547 5.64781 1.22238V5.9585Z" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>
    },
    {
        id:3,
        categoryId:0,
        name:'Shampoo',
        icon: <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <Path d="M10.7373 9.56421H6.6275V16.7377H10.7373V9.56421Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.7371 20.2498H0.5V8.06988C0.5 7.02375 1.39666 6.12708 2.44279 6.12708H8.79429C9.84042 6.12708 10.7371 7.02375 10.7371 8.06988V20.2498Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.04728 6.12725H3.19025V2.46578C4.83416 1.94272 6.40336 1.94272 8.04728 2.46578V6.12725Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.8864 4.93179C11.3817 4.93179 11.7831 4.53033 11.7831 4.03511C11.7831 3.53988 11.3817 3.13843 10.8864 3.13843C10.3912 3.13843 9.98975 3.53988 9.98975 4.03511C9.98975 4.53033 10.3912 4.93179 10.8864 4.93179Z" fill="#DE0C77"/>
        <Path d="M13.2028 3.21292C13.6981 3.21292 14.0995 2.81146 14.0995 2.31624C14.0995 1.82101 13.6981 1.41956 13.2028 1.41956C12.7076 1.41956 12.3062 1.82101 12.3062 2.31624C12.3062 2.81146 12.7076 3.21292 13.2028 3.21292Z" fill="#DE0C77"/>
        <Path d="M13.2028 6.57546C13.6981 6.57546 14.0995 6.17401 14.0995 5.67878C14.0995 5.18356 13.6981 4.7821 13.2028 4.7821C12.7076 4.7821 12.3062 5.18356 12.3062 5.67878C12.3062 6.17401 12.7076 6.57546 13.2028 6.57546Z" fill="#DE0C77"/>
        <Path d="M15.4445 4.93179C15.9397 4.93179 16.3412 4.53033 16.3412 4.03511C16.3412 3.53988 15.9397 3.13843 15.4445 3.13843C14.9493 3.13843 14.5478 3.53988 14.5478 4.03511C14.5478 4.53033 14.9493 4.93179 15.4445 4.93179Z" fill="#DE0C77"/>
        <Path d="M15.5196 1.79337C16.0148 1.79337 16.4163 1.39192 16.4163 0.896691C16.4163 0.401467 16.0148 0 15.5196 0C15.0244 0 14.6229 0.401467 14.6229 0.896691C14.6229 1.39192 15.0244 1.79337 15.5196 1.79337Z" fill="#DE0C77"/>
        <Path d="M15.5196 8.07022C16.0148 8.07022 16.4163 7.66876 16.4163 7.17354C16.4163 6.67831 16.0148 6.27686 15.5196 6.27686C15.0244 6.27686 14.6229 6.67831 14.6229 7.17354C14.6229 7.66876 15.0244 8.07022 15.5196 8.07022Z" fill="#DE0C77"/>
        </Svg>,
        iconActive:<Svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <Path d="M10.7373 9.56421H6.6275V16.7377H10.7373V9.56421Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.7371 20.2498H0.5V8.06988C0.5 7.02375 1.39666 6.12708 2.44279 6.12708H8.79429C9.84042 6.12708 10.7371 7.02375 10.7371 8.06988V20.2498Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.04728 6.12725H3.19025V2.46578C4.83416 1.94272 6.40336 1.94272 8.04728 2.46578V6.12725Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.8864 4.93179C11.3817 4.93179 11.7831 4.53033 11.7831 4.03511C11.7831 3.53988 11.3817 3.13843 10.8864 3.13843C10.3912 3.13843 9.98975 3.53988 9.98975 4.03511C9.98975 4.53033 10.3912 4.93179 10.8864 4.93179Z" fill="white"/>
        <Path d="M13.2028 3.21292C13.6981 3.21292 14.0995 2.81146 14.0995 2.31624C14.0995 1.82101 13.6981 1.41956 13.2028 1.41956C12.7076 1.41956 12.3062 1.82101 12.3062 2.31624C12.3062 2.81146 12.7076 3.21292 13.2028 3.21292Z" fill="white"/>
        <Path d="M13.2028 6.57546C13.6981 6.57546 14.0995 6.17401 14.0995 5.67878C14.0995 5.18356 13.6981 4.7821 13.2028 4.7821C12.7076 4.7821 12.3062 5.18356 12.3062 5.67878C12.3062 6.17401 12.7076 6.57546 13.2028 6.57546Z" fill="white"/>
        <Path d="M15.4445 4.93179C15.9397 4.93179 16.3412 4.53033 16.3412 4.03511C16.3412 3.53988 15.9397 3.13843 15.4445 3.13843C14.9493 3.13843 14.5478 3.53988 14.5478 4.03511C14.5478 4.53033 14.9493 4.93179 15.4445 4.93179Z" fill="white"/>
        <Path d="M15.5196 1.79337C16.0148 1.79337 16.4163 1.39192 16.4163 0.896691C16.4163 0.401467 16.0148 0 15.5196 0C15.0244 0 14.6229 0.401467 14.6229 0.896691C14.6229 1.39192 15.0244 1.79337 15.5196 1.79337Z" fill="white"/>
        <Path d="M15.5196 8.07022C16.0148 8.07022 16.4163 7.66876 16.4163 7.17354C16.4163 6.67831 16.0148 6.27686 15.5196 6.27686C15.0244 6.27686 14.6229 6.67831 14.6229 7.17354C14.6229 7.66876 15.0244 8.07022 15.5196 8.07022Z" fill="white"/>
        </Svg>
    },
    {
        id:4,
        categoryId:0,
        name:'Moisturizer',
        icon: <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <Path d="M10.7373 9.56421H6.6275V16.7377H10.7373V9.56421Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.7371 20.2498H0.5V8.06988C0.5 7.02375 1.39666 6.12708 2.44279 6.12708H8.79429C9.84042 6.12708 10.7371 7.02375 10.7371 8.06988V20.2498Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.04728 6.12725H3.19025V2.46578C4.83416 1.94272 6.40336 1.94272 8.04728 2.46578V6.12725Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.8864 4.93179C11.3817 4.93179 11.7831 4.53033 11.7831 4.03511C11.7831 3.53988 11.3817 3.13843 10.8864 3.13843C10.3912 3.13843 9.98975 3.53988 9.98975 4.03511C9.98975 4.53033 10.3912 4.93179 10.8864 4.93179Z" fill="#DE0C77"/>
        <Path d="M13.2028 3.21292C13.6981 3.21292 14.0995 2.81146 14.0995 2.31624C14.0995 1.82101 13.6981 1.41956 13.2028 1.41956C12.7076 1.41956 12.3062 1.82101 12.3062 2.31624C12.3062 2.81146 12.7076 3.21292 13.2028 3.21292Z" fill="#DE0C77"/>
        <Path d="M13.2028 6.57546C13.6981 6.57546 14.0995 6.17401 14.0995 5.67878C14.0995 5.18356 13.6981 4.7821 13.2028 4.7821C12.7076 4.7821 12.3062 5.18356 12.3062 5.67878C12.3062 6.17401 12.7076 6.57546 13.2028 6.57546Z" fill="#DE0C77"/>
        <Path d="M15.4445 4.93179C15.9397 4.93179 16.3412 4.53033 16.3412 4.03511C16.3412 3.53988 15.9397 3.13843 15.4445 3.13843C14.9493 3.13843 14.5478 3.53988 14.5478 4.03511C14.5478 4.53033 14.9493 4.93179 15.4445 4.93179Z" fill="#DE0C77"/>
        <Path d="M15.5196 1.79337C16.0148 1.79337 16.4163 1.39192 16.4163 0.896691C16.4163 0.401467 16.0148 0 15.5196 0C15.0244 0 14.6229 0.401467 14.6229 0.896691C14.6229 1.39192 15.0244 1.79337 15.5196 1.79337Z" fill="#DE0C77"/>
        <Path d="M15.5196 8.07022C16.0148 8.07022 16.4163 7.66876 16.4163 7.17354C16.4163 6.67831 16.0148 6.27686 15.5196 6.27686C15.0244 6.27686 14.6229 6.67831 14.6229 7.17354C14.6229 7.66876 15.0244 8.07022 15.5196 8.07022Z" fill="#DE0C77"/>
        </Svg>,
        iconActive:<Svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <Path d="M10.7373 9.56421H6.6275V16.7377H10.7373V9.56421Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.7371 20.2498H0.5V8.06988C0.5 7.02375 1.39666 6.12708 2.44279 6.12708H8.79429C9.84042 6.12708 10.7371 7.02375 10.7371 8.06988V20.2498Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.04728 6.12725H3.19025V2.46578C4.83416 1.94272 6.40336 1.94272 8.04728 2.46578V6.12725Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.8864 4.93179C11.3817 4.93179 11.7831 4.53033 11.7831 4.03511C11.7831 3.53988 11.3817 3.13843 10.8864 3.13843C10.3912 3.13843 9.98975 3.53988 9.98975 4.03511C9.98975 4.53033 10.3912 4.93179 10.8864 4.93179Z" fill="white"/>
        <Path d="M13.2028 3.21292C13.6981 3.21292 14.0995 2.81146 14.0995 2.31624C14.0995 1.82101 13.6981 1.41956 13.2028 1.41956C12.7076 1.41956 12.3062 1.82101 12.3062 2.31624C12.3062 2.81146 12.7076 3.21292 13.2028 3.21292Z" fill="white"/>
        <Path d="M13.2028 6.57546C13.6981 6.57546 14.0995 6.17401 14.0995 5.67878C14.0995 5.18356 13.6981 4.7821 13.2028 4.7821C12.7076 4.7821 12.3062 5.18356 12.3062 5.67878C12.3062 6.17401 12.7076 6.57546 13.2028 6.57546Z" fill="white"/>
        <Path d="M15.4445 4.93179C15.9397 4.93179 16.3412 4.53033 16.3412 4.03511C16.3412 3.53988 15.9397 3.13843 15.4445 3.13843C14.9493 3.13843 14.5478 3.53988 14.5478 4.03511C14.5478 4.53033 14.9493 4.93179 15.4445 4.93179Z" fill="white"/>
        <Path d="M15.5196 1.79337C16.0148 1.79337 16.4163 1.39192 16.4163 0.896691C16.4163 0.401467 16.0148 0 15.5196 0C15.0244 0 14.6229 0.401467 14.6229 0.896691C14.6229 1.39192 15.0244 1.79337 15.5196 1.79337Z" fill="white"/>
        <Path d="M15.5196 8.07022C16.0148 8.07022 16.4163 7.66876 16.4163 7.17354C16.4163 6.67831 16.0148 6.27686 15.5196 6.27686C15.0244 6.27686 14.6229 6.67831 14.6229 7.17354C14.6229 7.66876 15.0244 8.07022 15.5196 8.07022Z" fill="white"/>
        </Svg>
    },
    {
        id:5,
        categoryId:0,
        name:'Soap',
        icon: <Svg xmlns="http://www.w3.org/2000/svg" width="8" height="22" viewBox="0 0 8 22" fill="none">
        <Path d="M7.15801 20.9221H0.5V12.2735C0.5 11.6558 0.980459 11.1753 1.59821 11.1753H6.05977C6.67753 11.1753 7.15801 11.6558 7.15801 12.2735V20.9221Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M0.705811 13.5089H7.02064" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.47172 5.95862H1.25513V11.1752H6.47172V5.95862Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M5.64781 5.9585H2.07855V2.45788L4.89277 0.741899C5.23597 0.535981 5.64781 0.810547 5.64781 1.22238V5.9585Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>,
        iconActive:<Svg xmlns="http://www.w3.org/2000/svg" width="8" height="22" viewBox="0 0 8 22" fill="none">
        <Path d="M7.15801 20.9221H0.5V12.2735C0.5 11.6558 0.980459 11.1753 1.59821 11.1753H6.05977C6.67753 11.1753 7.15801 11.6558 7.15801 12.2735V20.9221Z" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M0.705811 13.5089H7.02064" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.47172 5.95862H1.25513V11.1752H6.47172V5.95862Z" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M5.64781 5.9585H2.07855V2.45788L4.89277 0.741899C5.23597 0.535981 5.64781 0.810547 5.64781 1.22238V5.9585Z" stroke="#FFFFFF" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>
    },
    {
        id:6,
        categoryId:0,
        name:'Eye Care',
        icon: <Svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
        <Path d="M4.01459 11.4602C4.51668 10.3724 4.76772 9.95395 5.26982 9.03345" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.77617 18.9918C4.60044 18.9918 2.84314 17.2344 2.84314 15.0587" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.136 14.9749C13.136 16.0628 12.8849 17.067 12.3828 17.9038C11.295 19.9122 9.20292 21.2511 6.77614 21.2511C3.2615 21.2511 0.5 18.4059 0.5 14.9749C0.5 11.544 6.77614 1.08374 6.77614 1.08374C6.77614 1.08374 9.11924 4.93311 10.9602 8.78248C12.1318 11.2093 13.136 13.636 13.136 14.9749Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M20.5 13.1339C20.5 16.1464 18.0732 18.5732 15.0607 18.5732C14.0565 18.5732 13.136 18.3221 12.3829 17.9037C12.885 17.0669 13.136 16.0627 13.136 14.9749C13.136 13.636 12.1318 11.2092 10.9603 8.69873C12.5502 5.10041 15.0607 1 15.0607 1C15.0607 1 20.5 10.1213 20.5 13.1339Z" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.136 9.28443C13.5545 8.36393 13.8055 7.94552 14.2239 7.19238" stroke="#DE0C77" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>,
        iconActive:<Svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
        <Path d="M4.01459 11.4602C4.51668 10.3724 4.76772 9.95395 5.26982 9.03345" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6.77617 18.9918C4.60044 18.9918 2.84314 17.2344 2.84314 15.0587" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.136 14.9749C13.136 16.0628 12.8849 17.067 12.3828 17.9038C11.295 19.9122 9.20292 21.2511 6.77614 21.2511C3.2615 21.2511 0.5 18.4059 0.5 14.9749C0.5 11.544 6.77614 1.08374 6.77614 1.08374C6.77614 1.08374 9.11924 4.93311 10.9602 8.78248C12.1318 11.2093 13.136 13.636 13.136 14.9749Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M20.5 13.1339C20.5 16.1464 18.0732 18.5732 15.0607 18.5732C14.0565 18.5732 13.136 18.3221 12.3829 17.9037C12.885 17.0669 13.136 16.0627 13.136 14.9749C13.136 13.636 12.1318 11.2092 10.9603 8.69873C12.5502 5.10041 15.0607 1 15.0607 1C15.0607 1 20.5 10.1213 20.5 13.1339Z" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M13.136 9.28443C13.5545 8.36393 13.8055 7.94552 14.2239 7.19238" stroke="white" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    },
    {
        id:7,
        categoryId:0,
        name:'Makeup',
        icon: <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <Path d="M10.7373 9.56421H6.6275V16.7377H10.7373V9.56421Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.7371 20.2498H0.5V8.06988C0.5 7.02375 1.39666 6.12708 2.44279 6.12708H8.79429C9.84042 6.12708 10.7371 7.02375 10.7371 8.06988V20.2498Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.04728 6.12725H3.19025V2.46578C4.83416 1.94272 6.40336 1.94272 8.04728 2.46578V6.12725Z" stroke="#DE0C77" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.8864 4.93179C11.3817 4.93179 11.7831 4.53033 11.7831 4.03511C11.7831 3.53988 11.3817 3.13843 10.8864 3.13843C10.3912 3.13843 9.98975 3.53988 9.98975 4.03511C9.98975 4.53033 10.3912 4.93179 10.8864 4.93179Z" fill="#DE0C77"/>
        <Path d="M13.2028 3.21292C13.6981 3.21292 14.0995 2.81146 14.0995 2.31624C14.0995 1.82101 13.6981 1.41956 13.2028 1.41956C12.7076 1.41956 12.3062 1.82101 12.3062 2.31624C12.3062 2.81146 12.7076 3.21292 13.2028 3.21292Z" fill="#DE0C77"/>
        <Path d="M13.2028 6.57546C13.6981 6.57546 14.0995 6.17401 14.0995 5.67878C14.0995 5.18356 13.6981 4.7821 13.2028 4.7821C12.7076 4.7821 12.3062 5.18356 12.3062 5.67878C12.3062 6.17401 12.7076 6.57546 13.2028 6.57546Z" fill="#DE0C77"/>
        <Path d="M15.4445 4.93179C15.9397 4.93179 16.3412 4.53033 16.3412 4.03511C16.3412 3.53988 15.9397 3.13843 15.4445 3.13843C14.9493 3.13843 14.5478 3.53988 14.5478 4.03511C14.5478 4.53033 14.9493 4.93179 15.4445 4.93179Z" fill="#DE0C77"/>
        <Path d="M15.5196 1.79337C16.0148 1.79337 16.4163 1.39192 16.4163 0.896691C16.4163 0.401467 16.0148 0 15.5196 0C15.0244 0 14.6229 0.401467 14.6229 0.896691C14.6229 1.39192 15.0244 1.79337 15.5196 1.79337Z" fill="#DE0C77"/>
        <Path d="M15.5196 8.07022C16.0148 8.07022 16.4163 7.66876 16.4163 7.17354C16.4163 6.67831 16.0148 6.27686 15.5196 6.27686C15.0244 6.27686 14.6229 6.67831 14.6229 7.17354C14.6229 7.66876 15.0244 8.07022 15.5196 8.07022Z" fill="#DE0C77"/>
        </Svg>,
        iconActive:<Svg xmlns="http://www.w3.org/2000/svg" width="17" height="21" viewBox="0 0 17 21" fill="none">
        <Path d="M10.7373 9.56421H6.6275V16.7377H10.7373V9.56421Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.7371 20.2498H0.5V8.06988C0.5 7.02375 1.39666 6.12708 2.44279 6.12708H8.79429C9.84042 6.12708 10.7371 7.02375 10.7371 8.06988V20.2498Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M8.04728 6.12725H3.19025V2.46578C4.83416 1.94272 6.40336 1.94272 8.04728 2.46578V6.12725Z" stroke="white" stroke-width="0.58" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M10.8864 4.93179C11.3817 4.93179 11.7831 4.53033 11.7831 4.03511C11.7831 3.53988 11.3817 3.13843 10.8864 3.13843C10.3912 3.13843 9.98975 3.53988 9.98975 4.03511C9.98975 4.53033 10.3912 4.93179 10.8864 4.93179Z" fill="white"/>
        <Path d="M13.2028 3.21292C13.6981 3.21292 14.0995 2.81146 14.0995 2.31624C14.0995 1.82101 13.6981 1.41956 13.2028 1.41956C12.7076 1.41956 12.3062 1.82101 12.3062 2.31624C12.3062 2.81146 12.7076 3.21292 13.2028 3.21292Z" fill="white"/>
        <Path d="M13.2028 6.57546C13.6981 6.57546 14.0995 6.17401 14.0995 5.67878C14.0995 5.18356 13.6981 4.7821 13.2028 4.7821C12.7076 4.7821 12.3062 5.18356 12.3062 5.67878C12.3062 6.17401 12.7076 6.57546 13.2028 6.57546Z" fill="white"/>
        <Path d="M15.4445 4.93179C15.9397 4.93179 16.3412 4.53033 16.3412 4.03511C16.3412 3.53988 15.9397 3.13843 15.4445 3.13843C14.9493 3.13843 14.5478 3.53988 14.5478 4.03511C14.5478 4.53033 14.9493 4.93179 15.4445 4.93179Z" fill="white"/>
        <Path d="M15.5196 1.79337C16.0148 1.79337 16.4163 1.39192 16.4163 0.896691C16.4163 0.401467 16.0148 0 15.5196 0C15.0244 0 14.6229 0.401467 14.6229 0.896691C14.6229 1.39192 15.0244 1.79337 15.5196 1.79337Z" fill="white"/>
        <Path d="M15.5196 8.07022C16.0148 8.07022 16.4163 7.66876 16.4163 7.17354C16.4163 6.67831 16.0148 6.27686 15.5196 6.27686C15.0244 6.27686 14.6229 6.67831 14.6229 7.17354C14.6229 7.66876 15.0244 8.07022 15.5196 8.07022Z" fill="white"/>
        </Svg>
    },

]
const HomeCategories = () => {
  const [activeCategory,setActiveCategory] = useState(0);
  const changeIndex = (indexNumber) =>{
    setActiveCategory(indexNumber);
  }
  return (
    <View style={styles.mainDiv}>
      {categories.map((item,index)=>(<Pressable onPress={()=>changeIndex(index)} key={index} style={[styles.singleCategoryDiv,{backgroundColor:activeCategory == index?'#DE0C77':'#FFFFFF'}]}>
      {activeCategory !== index?item.icon:item.iconActive}
        <Text style={[styles.categoryText,{color:activeCategory !== index?'#DE0C77':'#FFFFFF'}]}>{item.name}</Text>
      </Pressable>))}
    </View>
  )
}

export default memo(HomeCategories)

const styles = StyleSheet.create({
    mainDiv:{
        padding:10,
        flexDirection:'row',
        flexWrap:'wrap',
        width:sizes.width,
        justifyContent:'space-around'
        
    },
    singleCategoryDiv:{
        height:sizes.width/5,
        width:sizes.width/5,
        borderWidth:1,
        borderRadius:5,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#DE0C77',
        marginBottom:10
    },
    categoryText:{
        color:'#DE0C77',
        fontSize:8,
        marginTop:10
    }
})