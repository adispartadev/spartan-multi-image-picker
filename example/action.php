<?php
	sleep(3);

	// your upload script

	$files = $_POST['fileUpload'];

	echo json_encode(['status' => true]);