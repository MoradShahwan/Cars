$("#search").on("click", function(){
    $.ajax({
        url: 'https://data.gov.il/api/3/action/datastore_search',
        data: {
            resource_id: '053cea08-09bc-40ec-8f7a-156f0677aff3',
            q: $("#car_number").val()
        },

        success: function(res){
            console.log(res.result.records);
            $("#result").html('');
            
            if (res.result.records.length === 0) {
                alert("לא נמצאו רכבים!");
                return;
            }
            
            $.each(res.result.records, function(index,car){
                $("#result").append(`
                    <div class="card mb-3 mx-auto" style="max-width: 400px;">
                        <div class="card-body">
                            <p><strong>ייצרן:</strong> ${car.tozeret_nm}</p>
                            <p><strong>דגם:</strong> ${car.kinuy_mishari}</p>
                            <p><strong>צבע רכב:</strong> ${car.tzeva_rechev}</p>
                            <p><strong>בעלות:</strong> ${car.baalut}</p>
                            <p><strong>טסט עד:</strong> ${car.tokef_dt}</p>
                        </div>
                    </div>
                `);
            });
        }
    });
});