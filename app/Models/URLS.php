<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class URLS extends Model
{
    use HasFactory;
    protected $fillable = [
        'original_url',
        'hashed_url',
    ];
}
