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
        Schema::create('dog_raw_parents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('dog_id')->nullable();
            $table->string('sire_name', 255)->nullable();
            $table->date('sire_dob')->nullable();
            $table->string('sire_micro', 255)->nullable();
            $table->string('sire_reg_no', 255)->nullable();
            $table->string('dam_name', 255)->nullable();
            $table->date('dam_dob')->nullable();
            $table->string('dam_micro', 255)->nullable();
            $table->string('dam_reg_no', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dog_raw_parents');
    }
};
