<?php

namespace App\Http\Controllers;

use App\blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function create()
    {
        return view('blogcreate');
    }

    public function init(){
        return view('welcome');
    }

    public function store(Request $request)
    {
        $blog = new blog();
        $blog->blogtitle = $request->get('blogtitle');
        $blog->desc = $request->get('desc');
        $blog->save();
        return redirect('blog')->with('success', 'Blog has been successfully added');
    }

    public function isValidreq(Request $request){
        if($request->header('Authorization') && $request->header('Custom') && $request->header('X-XSRF-TOKEN') && $request->header('Cookie') && $request->header('Host')){
            return true;
        }
        return false;
    }

    public function index()
    {
        $blogs=blog::all();
        return view('displayblog',compact('blogs'));
    }

    public function getAllBlogs(Request $request){
        if($this->isValidreq($request)){
            $blogs=blog::take(3)->get();
            return ['blogs'=>$blogs];
        }

    }

    public function getNextBlogs(Request $request,$skip,$limit){
        if($this->isValidreq($request)){
            $blogs=blog::skip((int)$skip)->take((int)$limit)->get();
            return ['blogs'=>$blogs];
        }
    }
}
