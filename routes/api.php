<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('addBlog','BlogController@addBlog');
Route::put('updateBlog','BlogController@updateBlog');
Route::delete('deleteBlog','BlogController@deleteBlog');
Route::get('blogs','BlogController@getAllBlogs');
Route::get('nextBlogs/{skip}/{limit}','BlogController@getNextBlogs');
Route::get('getMyToken','AuthController@getMyToken');
