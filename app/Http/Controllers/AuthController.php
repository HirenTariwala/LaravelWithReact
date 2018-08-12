<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTFactory;
use JWTAuth;
use App\blog;


class AuthController extends Controller
{
    //
    public function getMyToken(){
        $credentials = blog::first();
        $token = JWTAuth::fromUser($credentials);
        return response()->json(compact('token'));
    }
}
