<?php
namespace App\Controllers;

// use App\Models\BooksModel;
use Dragon\Component\Controller\AbstractController;

class BooksController extends AbstractController
{
    public function index()
    {
        // $model = new BooksModel;
        // $books = $model->findAll();
        $books = $this->findAll();

        return $this->render("books/index.html", [
            'books' => $books
        ]);
    }
    public function create()
    {
        # code...
    }
    public function read()
    {
        # code...
    }
    public function update()
    {
        # code...
    }
    public function delete()
    {
        # code...
    }
}