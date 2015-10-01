window.onload = function() {
	var renderer,
		scene,
		camera,
		controls,
		meshMaterial;
	
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	renderer = new THREE.WebGLRenderer({ antialias: true });
	document.body.appendChild( renderer.domElement );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColorHex( 0xeeeeee, 1.0 );

	scene = new THREE.Scene();
	
	// Add some objects to the scene, one per quadrant
	meshMaterial = new THREE.MeshBasicMaterial({ color: 0x2194ce, wireframe: true });
	
	var mesh = new THREE.Geometry();
        
        // vertives
        var pt0 = new THREE.Vector3(0,0,0);
           
          var sphere = new THREE.SphereGeometry( 0.5);
var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
var ball0 = new THREE.Mesh( sphere, material );
ball0.applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0) );
scene.add( ball0 );

        var pt1 = new THREE.Vector3(10,0,0);
        material1 = new THREE.MeshBasicMaterial( {color: 0x202000} );
var ball1 = new THREE.Mesh( sphere, material1 );
ball1.applyMatrix( new THREE.Matrix4().makeTranslation(10, 0, 0) );
scene.add( ball1 );
        var pt2 = new THREE.Vector3(10,0,10);
        material2 = new THREE.MeshBasicMaterial( {color: 0x302000} );
var ball2 = new THREE.Mesh( sphere, material2 );
ball2.applyMatrix( new THREE.Matrix4().makeTranslation(10,0,10) );
scene.add( ball2 );
        var pt3 = new THREE.Vector3(0,0,10);
        material3 = new THREE.MeshBasicMaterial( {color: 0x404000} );
var ball3 = new THREE.Mesh( sphere, material3 );
ball3.applyMatrix( new THREE.Matrix4().makeTranslation(0,0,10));
scene.add( ball3 );
        var pt4 = new THREE.Vector3(0,10,0);
        material4 = new THREE.MeshBasicMaterial( {color: 0x505000} );
var ball4 = new THREE.Mesh( sphere, material4 );
ball4.applyMatrix( new THREE.Matrix4().makeTranslation(0,10,0) );
scene.add( ball4 );
        var pt5 = new THREE.Vector3(10,10,0);
        material5 = new THREE.MeshBasicMaterial( {color: 0x707000} );
var ball5 = new THREE.Mesh( sphere, material5 );
ball5.applyMatrix( new THREE.Matrix4().makeTranslation(10,10,0));
scene.add( ball5 );
        var pt6 = new THREE.Vector3(10,10,10);
        material6 = new THREE.MeshBasicMaterial( {color: 0x808000} );
var ball6 = new THREE.Mesh( sphere, material6 );
ball6.applyMatrix( new THREE.Matrix4().makeTranslation(10,10,10) );
scene.add( ball6 );
        var pt7 = new THREE.Vector3(0,10,10);
        material7 = new THREE.MeshBasicMaterial( {color: 0x909000} );
var ball7 = new THREE.Mesh( sphere, material7 );
ball7.applyMatrix( new THREE.Matrix4().makeTranslation(0,10,10) );
scene.add( ball7 );
        
        mesh.vertices.push(pt0,pt1,pt2,pt3,pt4,pt5,pt6,pt7);

        // triangles 
        var face0 = new THREE.Face3(0,2,5);
     //    var _face0 = new THREE.Face3(2,1,5);
        var face1 = new THREE.Face3(0,5,7);
     //    var _face1 = new THREE.Face3(0,2,5);
        var face2 = new THREE.Face3(0,7,2);
     //    var _face2 = new THREE.Face3(1,0,5);
        var face3 = new THREE.Face3(2,5,7);
     //    var _face3 = new THREE.Face3(3,4,5);
      //  var face4 = new THREE.Face3(4,6,3);
     //    var _face4 = new THREE.Face3(6,4,3);
    //    var face5 = new THREE.Face3(4,7,3);
    //      var _face5 = new THREE.Face3(7,4,3);
      
   //     mesh.faces.push(face0,face1, face2, face3, face4, face5, _face0,_face1, _face2, _face3, _face4, _face5);
       mesh.faces.push(face0, face1, face2, face3);
    var cube = new THREE.Mesh(mesh,meshMaterial);
	scene.add(cube);
	// Add axes
	axes = buildAxes( 200 );
	scene.add( axes );

    
	
	// We need a camera to look at the scene!
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set( -30, 40, 30 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

	
	// And some sort of controls to move around
	// We'll use one of THREE's provided control classes for simplicity
	controls = new THREE.TrackballControls( camera );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 0.2;
	controls.panSpeed = 0.8;

	controls.noZoom = false;
	controls.noPan = false;

	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;


	// and go!
	animate();

	function animate() {
		requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
	}

	function buildAxes( length ) {
		var axes = new THREE.Object3D();

		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( length, 0, 0 ), 0xFF0000, false ) ); // +X
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -length, 0, 0 ), 0xFF0000, true) ); // -X
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, length, 0 ), 0x00FF00, false ) ); // +Y
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, -length, 0 ), 0x00FF00, true ) ); // -Y
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, length ), 0x0000FF, false ) ); // +Z
		axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -length ), 0x0000FF, true ) ); // -Z

		return axes;

	}

	function buildAxis( src, dst, colorHex, dashed ) {
		var geom = new THREE.Geometry(),
			mat; 

		if(dashed) {
			mat = new THREE.LineDashedMaterial({ linewidth: 3, color: colorHex, dashSize: 3, gapSize: 3 });
		} else {
			mat = new THREE.LineBasicMaterial({ linewidth: 3, color: colorHex });
		}

		geom.vertices.push( src.clone() );
		geom.vertices.push( dst.clone() );
		geom.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines

		var axis = new THREE.Line( geom, mat, THREE.LinePieces );

		return axis;

	}
}
