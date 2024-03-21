<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class PostController extends Controller
{
    use AuthorizesRequests;


    public function showAll()
    {
        return Inertia::render('Home', [
            'posts' => Post::with('user:id,name')->latest()->get()
        ]);
    }

    public function index()
    {
        //
        return Inertia::render('Prompts/Index', [

            // get only the posts of
            'posts' =>  Post::with('user:id,name')->where('user_id', auth()->id())->latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        // 
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'prompt' => 'required',
        ]);

        $request->user()->posts()->create($validated);

        return redirect(route('prompts.index'));
    }

    public function update(Request $request, Post $prompt)
    {
        //
        $this->authorize('update', $prompt);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'prompt' => 'required',
        ]);

        $prompt->update($validated);

        return redirect(route('prompts.index'));
    }

    public function destroy(Post $prompt)
    {
        //
        $this->authorize('delete', $prompt);
        $prompt->delete();

        return redirect(route('prompts.index'));
    }
}
