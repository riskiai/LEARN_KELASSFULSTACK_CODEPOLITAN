<?php

namespace App\Http\Controllers;

/* Class Request */
use Illuminate\Http\Request;

class TaskController extends Controller
{
    private $tasklist = [
        'first' => 'Sleep', 
        'second' => 'Eat',
        'third' => 'Work'
    ];


    public function index(Request $request)
    {
        if ($request->search) {
            return $this->tasklist[$request->search];
        }
        return $this->tasklist;
    }

    /* Memindahkan Prosess Method POST, PATCH, dan DELETE ke Controller */
    public function store(Request $request)
    {
        $this->tasklist[$request->label] = $request->task;
        return $this->tasklist;
    }

    // Memindahakan Method GET dan Route Parameter di Controller
    public function show($param) {
         return $param;
         return $this->tasklist[$param];
    }

    public function update(Request $request, $key)
    {   
        $this->tasklist[$key] = $request->task;
        return $this->tasklist;
    }
   
    public function destroy($key) {
        unset($this->tasklist[$key]);
        return $this->tasklist;
    }
    
}
