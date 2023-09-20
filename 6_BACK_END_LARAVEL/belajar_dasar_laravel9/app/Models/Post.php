<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    /* Harus Menambahkan Fillable */
    public $fillable = [
        'title',
        'content',
    ];

    // Akan Mengtriger Event Event
    public static function boot() {
        parent::boot();

        static::creating(function ($post) {
            /* Apa Yang Dilakukan Sebelum Datanya Masuk Ke Database */
            $post->slug = str_replace(' ', '-' ,$post->title);
        });
    }

    // Relasi Modelnya
    // Satu Post Data Mempunyai Banyak Data Comment
    public function comments(){ 
        // Contoh HashMany Seperti SELECT * FROM comments WHERE post_id=$this->id
        return $this->hasMany(Comment::class);
    }

    /* Membuat Function Sendiri Untuk Jumlah Comment */
    public function total_comments() {
        /* Querynya Seperti SELECT COUNT(1) FROM comments WHERE ... */
        return $this->comments()->count();
    }

    // Agar Lebih Singkat Untuk Berkolaborasi di controller
    public function scopeActive($query){
        return $query->where('active', true);
    }
}
