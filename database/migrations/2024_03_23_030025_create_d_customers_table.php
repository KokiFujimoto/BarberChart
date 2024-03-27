<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("d_customers", function(Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("kana");
            $table->integer("birthday")->default(19000101);
            $table->integer("occupation_id")->default(0);
            $table->String("address");
            $table->String("tel");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("d_customers");
    }
};
