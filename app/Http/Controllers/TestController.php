<?php

namespace App\Http\Controllers;

use App\Models\Prompt;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
class PromptController extends Controller
{


        public function showAll()
    {
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

        return Inertia::render('MyPrompts/Index',[
        'prompts' =>  Prompt::with('user:id,name')->where('user_id', auth()->id())->latest()->get()
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

        $validated = $request->validate([
            'title'=>'required',
            'description'=>'required',
            'prompt'=>'required'
        ]);

        $user = $request->user();
        $user->prompts()->save($prompt->fill($validated));
        
        return redirect(route('myprompts.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Prompt $prompt, User $user)
    {
        //

        $prompt->delete();

        return redirect(route('myprompts.index'));
    }

}
