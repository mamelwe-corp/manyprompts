<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prompt extends Model
{
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class); // explain this relationship: a prompt belongs to a user
    }

    public function likes()
{
    return $this->hasMany(Like::class);
}

public function likedBy(User $user)
{
    return $this->likes->contains('user_id', $user->id);
}
    protected $fillable = ['title', 'description', 'prompt'];

}
