<?php
namespace App\Controllers;

// use App\Models\BooksModel;
use Dragon\Component\Controller\AbstractController;
use Dragon\Component\Database\Query;

class BooksController extends AbstractController
{
    public function index()
    {
        // Query
        // --

        // A. Make query by the AbstractController

        // A.1. In case of Multiple database, you can reset the database statement definition
        // $this->setDatabaseStatementDefinition('test');

        // A.2. Execute
        $books = $this->findAll([
            // Query::ORDER_BY => "title",
            // Query::ORDER_DIR => "DESC",
            // Query::LIMIT => 1,
        ]);


        // B. Make query by the EntityModel

        // B.1. Get the Model
        // $model = new BooksModel;
        
        // B.2. In case of Multiple database, you can reset the database statement definition
        // $model->setDatabaseStatementDefinition('test');

        // B.3. Execute
        // $books = $model->findAll();

        // dump( $books );

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