<?php

namespace App\Http\Controllers;

use App\Models\Likes;
use Illuminate\Http\Request;

class LikesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
public function store(Prompt $prompt)
{
    if ($prompt->user_id !== auth()->id() && !$prompt->likedBy(auth()->user())) {
        $prompt->incrementLikes();
        $prompt->likes()->create(['user_id' => auth()->id()]);
    }

    return response(null, 204);
}

    /**
     * Display the specified resource.
     */
    public function show(Likes $likes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Likes $likes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Likes $likes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prompt $prompt)
{
    if ($prompt->user_id !== auth()->id() && $prompt->likedBy(auth()->user())) {
        $prompt->decrementLikes();
        $prompt->likes()->where('user_id', auth()->id())->delete();
    }

    return response(null, 204);
}
}
