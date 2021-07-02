Cmp.RelVeiculoAcimaVelocidade = function() {
    
    var private = {

        render: function() {

            Cmp.createInput({
                id: 'inputPlaca',
                renderTo: '#inputPlaca',
                label: 'Placa do veículo',
                width: '200px'
            });

            Cmp.createButton({
                id: 'btnBuscar',
                renderTo: '#divBtnConsultar',
                text: 'Buscar',
                handler: function() {
                    private.buscar();
                }
            });

            Cmp.createGrid({
                id: 'gridVeiculosAcimaVelocidade',
                renderTo: '#divCmpGridVeiculosAcimaVelocidade',
                header: [
                    {
                        text: 'Placa',
                        field: 'placa'
                    }, {
                        text: 'Nome',
                        field: 'nomefuncionario',
                        width: 200
                    }, {
                        text: 'Data',
                        field: 'data'
                    }, {
                        text: 'Vel. Max.',
                        field: 'velocidadeMaxima'
                    }, {
                        text: 'Vel. Reg.',
                        field: 'velocidadeRegistrada',
                        
                    }, {
                        text: 'Diff. Vel.',
                        field: 'difVelocidade'
                    }, {
                        text: 'Latidude',
                        field: 'latitude'
                    }, {
                        text: 'Longitude',
                        field: 'longitude'
                        
                    }
                ]
            });
        },

        buscar: function() {
            Cmp.showLoading();
            Cmp.request({
                url: 'index.php?mdl=relVeiculoAcimaVelocidade&file=ds_relVeiculoAcimaVelocidade.php',
                params: {
                    placa: Cmp.get('inputPlaca').getValue()
                },
                success: function(res) {
             
                    Cmp.hideLoading();
                    if(res.status == 'success') {
                 

                        const data = res.data.map((item, index, array) => {
                            console.log(item);

           

                    
                            var difVelocidade = ((parseInt(item.velocidade)/parseInt(item.velocidadeMaxima))*100)-100
                            difVelocidade = parseInt(difVelocidade)+' %';
                            item = {...item, difVelocidade}
                            return item;                           
                        });

                        console.log(data);
                       Cmp.get('gridVeiculosAcimaVelocidade').loadData(data);
                    } else {
                        Cmp.showErrorMessage(res.message || 'Ocorreu um erro na requisição');
                    }
                }
            });
        }

    };

    this.init = function() {
        private.render();
    }

}