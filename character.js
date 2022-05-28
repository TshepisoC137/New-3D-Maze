import * as THREE from './three.js-master/build/three.module.js'

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.IcosahedronGeometry(1, 1);
			const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
            const cube = new THREE.Mesh(geometry, material);
		
            
            
			scene.add( cube );

			var geo = new THREE. WireframeGeometry( geometry ); // or WireframeGeometry( geometry )

			var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );

			var wireframe = new THREE.LineSegments( geo, mat );

			scene.add( wireframe );

			camera.position.z = 5;
			function rotate(x,y){
				//cube.rotation.x += x;
				cube.rotation.y += y;

				//wireframe.rotation.x += x;
				wireframe.rotation.y += y;
		


				
            }
			function setFocus(object) {
					
					camera.position.set(object.position.x, object.position.y + 128, object.position.z - 256);
					camera.lookAt(object.position);
			}
	        function character(){
				const geometry = new THREE.IcosahedronGeometry(1, 1);
				const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
				const cube = new THREE.Mesh(geometry, material);
			
				
				
				scene.add( cube );

				var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )
                var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 2 } );
                var wireframe = new THREE.LineSegments( geo, mat );

				scene.add( wireframe );

                camera.position.z = 5;
                
                cube.position.x = 0.5;
                cube.position.y = 4;
                cube.position.z = 8;

			}
		
            
			function animate() {
				requestAnimationFrame( animate );
				rotate(0.01, 0.01);
                
				


				renderer.render( scene, camera );
			};

animate();