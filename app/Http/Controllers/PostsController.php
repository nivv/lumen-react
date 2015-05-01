<?php namespace App\Http\Controllers;

use App\Post;
use App\Http\Controllers\Controller;


class PostsController extends Controller {

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {

        $posts = Post::all();

        return response()->json($posts->toArray());
    }
}