<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Index Page</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
<div class="container">
    <br />
    @if (\Session::has('success'))
    <div class="alert alert-success">
        <p>{{ \Session::get('success') }}</p>
    </div><br />
    @endif
    <table class="table table-striped">
        <thead>
        <tr>
            <th>ID</th>
            <th>BlogTitle</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>

        @foreach($blogs as $blog)
        <tr>
            <td>{{$blog->id}}</td>
            <td>{{$blog->blogtitle}}</td>
            <td>{{$blog->desc}}</td>
        </tr>
        @endforeach
        </tbody>
    </table>
</div>
</body>
</html>