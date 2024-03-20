<?php

namespace App\Http\Controllers;

use App\Models\Prompt;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PromptController extends Controller
{
    public function showAll()
{

    //with('user:id,name') and get all
    $prompts = Prompt::with('user:id,name')->latest()->get();
    return Inertia::render('Home', [
        'prompts' => $prompts
    ]);
}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {   

        // prompts where the user_id is the same as the authenticated user. order by created_at in descending order

        return Inertia::render('MyPrompts/Index',[
        'prompts' => auth()->user()->prompts()->latest()->get()
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //validate data
        $validated = $request->validate([
            'title'=>'required',
            'description'=>'required',
            'prompt'=>'required'
        ]);

        $request->user()->prompts()->create($validated);

        return redirect(route('myprompts.index'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prompt $prompt)
    {
        $this->authorize('update', $prompt);

        $validated = $request->validate([
            'title'=>'required',
            'description'=>'required',
            'prompt'=>'required'
        ]);

        return redirect(route('myprompts.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prompt $prompt)
    {
        //
    }

}
