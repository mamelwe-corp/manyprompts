<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\DB;
class PostController extends Controller
{
    use AuthorizesRequests;

    // show all posts
    public function showAll()
    {
        return Inertia::render('Home', [
           'posts' => Post::with('user:id,name')->latest()->get()
        ]);
    }


    // show authenticated user posts
    public function index()
    {
        return Inertia::render('Prompts/Index', [  
            'posts' =>  Post::with('user:id,name')->where('user_id', auth()->id())->latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        //validate request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'prompt' => 'required',
        ]);

        //create post
        $request->user()->posts()->create($validated);

        return redirect(route('prompts.index'));
    }

    public function update(Request $request, Post $prompt)
    {
        //check if user is authorized
        $this->authorize('update', $prompt);

        //validate request
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'prompt' => 'required',
        ]);

        //update post
        $prompt->update($validated);

        return redirect(route('prompts.index'));
    }

    public function destroy(Post $prompt)
    {
        //check if user is authorized
        $this->authorize('delete', $prompt);

        //delete post
        $prompt->delete();

        return redirect(route('prompts.index'));
    }
}
