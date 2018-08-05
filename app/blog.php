<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class blog extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'Blog';

    protected $fillable = [
        'blogtitle', 'desc'
    ];
}
