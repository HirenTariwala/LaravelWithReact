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

    public function store(Request $request)
    {
        $blog = new blog();
        $blog->blogtitle = $request->get('blogtitle');
        $blog->desc = $request->get('desc');
        $blog->save();
        return redirect('blog')->with('success', 'Blog has been successfully added');
    }

    public function index()
    {
        $blogs=blog::all();
        return view('displayblog',compact('blogs'));
    }

    public function getAllBlogs(){
        $blogs=blog::take(3)->get();
        return ['blogs'=>$blogs];
    }

    public function getNextBlogs(Request $request,$skip,$limit){
        $blogs=blog::skip((int)$skip)->take((int)$limit)->get();
        return ['blogs'=>$blogs];

    }
}
