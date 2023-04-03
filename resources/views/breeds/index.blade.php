@extends('layouts.master')

@section('content')
    <div class="content-w" style="width:100%">
        
        <div class="content-i">
            <div class="content-box">
                <div class="element-wrapper">
                    <div class="element-box-tp">
                        <h5 class="form-header">
                            Breeds - List
                        </h5>
                        <div class="form-desc">
                        </div>
                        <div class="element-box-tp">
                            <div class="table-responsive">
                                <table class="table table-bordered table-lg table-v2 table-striped">
                                    <thead>
                                        <tr>
                                            <th>
                                                S.no
                                            </th>
                                            <th>
                                                Breed Name
                                            </th>
                                            <th>
                                                Species
                                            </th>
                                            <th>
                                                Actions
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        $i = 1;
                                        ?>

                                        @foreach ($breeds as $breed)
                                            <tr>
                                                <td>{{ $i++ }}</td>
                                                <td>
                                                    {{ $breed->name }}
                                                </td>
                                                <td class="text-center">
                                                    @if(isset($breed->species->name))
                                                    {{$breed->species->name}}
                                                    @endif
                                                </td>
                                                <td class="row-actions">
                                                    <a href="{{ route('breeds.show', $breed->id) }}"><i
                                                            class="os-icon os-icon-ui-49"></i></a><a href="#"><i
                                                            class="os-icon os-icon-grid-10"></i></a>
                                                            <a href="{{route('breeds.edit', $breed->id)}}" class="btn btn-icon btn-secondary">
                                                        <i class="fa fa-edit"></i>
                                                    </a>
                                                    <a href="{{route('br_del', $breed->id)}}" class="btn btn-icon btn-danger">
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    </div>
    <div class="display-type"></div>
    </div>
@endsection
