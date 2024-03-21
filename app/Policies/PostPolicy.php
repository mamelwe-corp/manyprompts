<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PostPolicy
{
    public function update(User $user, Post $post): bool
    {
        //
        return $post->user()->is($user);
        // return $user->id === $post->user_id
    }

    public function delete(User $user, Post $post): bool
    {
        return $this->update($user, $post);
    }

}
