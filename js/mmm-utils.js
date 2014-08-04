function toggle(box) {
    $(box).toggle();
    if (box=='#under_mmm_channel'){
        $('#under_smtp_channel').toggle();
    } else{
        $('#under_mmm_channel').toggle();
    }
}
