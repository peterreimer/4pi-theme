pannellum.viewer('panorama', 
	{
		"default": {
			"autoLoad": true, 
			"firstScene": "elbtunnel", 
			"hotSpotDebug": true
		}, 
		"scenes": {
			"elbtunnel": {
				"autoRotate": 1, 
				"compass": true, 
				"hfov": 70, 
				"hotSpots": [], 
				"multiRes": {
					"basePath": "http://ultra02/~reimer/tiles/elbtunnel", 
					"cubeResolution": 4224, 
					"extension": "jpg", 
					"fallbackPath": "/fallback/%s", 
					"maxLevel": 4, 
					"path": "/%l/%s%y_%x", 
					"tileResolution": 528
				}, 
				"northOffset": 240.8150808, 
				"pitch": 10, 
				"title": "Alter Elbtunnel", 
				"type": "multires", 
				"yaw": 292
			}
		}
	}
);
