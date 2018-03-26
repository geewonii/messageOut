$(function() {
  // g2 圆环图
  const { DataView } = DataSet;
  const pieData = [
    { item: "林泽妍", count: 26.6, value: "https://www.phonelee.com/Content/new/newimages/team-2.jpg" },
    { item: "金正阳", count: 22.34, value: "https://www.phonelee.com/Content/new/newimages/team-2.jpg" },
    { item: "黄敬军", count: 17.02, value: "https://www.phonelee.com/Content/new/newimages/team-2.jpg" },
    { item: "黄蓉", count: 17.02, value: "https://www.phonelee.com/Content/new/newimages/team-2.jpg" },
    { item: "钱博", count: 17.02, value: "https://www.phonelee.com/Content/new/newimages/team-2.jpg" }
  ];
  const dv = new DataView();
  dv.source(pieData).transform({
    type: "percent",
    field: "count",
    dimension: "item",
    as: "percent"
  });
  const pieChart = new G2.Chart({
    container: "g2Pie",
    height: 480,
    width: 656
  });
  pieChart.source(dv, {
    percent: {
      formatter: val => {
        val = val * 100 + "%";
        return val;
      }
    }
  }); 
  pieChart.coord("theta", { innerRadius: 0.5 });
  pieChart.tooltip({ itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>' });
  pieChart
    .intervalStack()
    .position("percent")
    .color("item")
    .label("percent", {
      offset: -30
    })
    .tooltip("item*percent", (item, percent) => {
      percent = percent * 100 + "%";
      return {
        name: item,
        value: percent
      };
    });
  pieChart.render();

  // g2 柱状图
  const columnData = [
    { year: '70后', sales: 3 },
    { year: '80后', sales: 3 },
    { year: '90后', sales: 9 },
  ];
  const dv1 = new DataView();
  dv1.source(columnData).transform({
    type: "percent",
    field: "sales",
    dimension: "year",
    as: "percent"
  });
  const columnChart = new G2.Chart({
    container: 'g2Column',
    forceFit: true,
    height: 480
  });
  // columnChart.source(columnData);
  columnChart.source(dv1, {
    percent: {
      formatter: val => {
        val = val * 100 + "%";
        return val;
      }
    }
  });
  columnChart.tooltip({ itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{value}</li>' });
  columnChart.interval().position('year*percent');
  columnChart.render();

  //webGl
  (function() {
    var renderer = null,
    scene = null, 
    camera = null,
    animating = true;
    onLoad();
    function onLoad() {
      const container = document.getElementById("glPie");
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true });
      renderer.setSize(container.offsetWidth, container.offsetHeight);

      scene = new THREE.Scene();
      scene.background = new THREE.Color( 0xffffff );
      camera = new THREE.PerspectiveCamera(25, container.offsetWidth / container.offsetHeight, 1 , 4000);
      camera.position.set( 0, 0, 4 );

      //创建光源
      const spotLight = new THREE.DirectionalLight(0xffffff, 1.5);
      spotLight.position.set(0, 13, 20);
      scene.add(spotLight);

      //创建圆柱
      const cylinderGeometry = new THREE.CylinderGeometry(1.5, 1.5, .14, 100, 100);
      const cylinderMaterial = new THREE.MeshLambertMaterial({ color: 0x448ccb });
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.rotation.x = Math.PI / 6;
      cylinder.position.y = 0.2;
      scene.add(cylinder);

      //创建圆环
      const torusGeometry = new THREE.CircleGeometry(1.118, 50, 50, Math.PI / 4.44);
      const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x82ca9c });
      const torus = new THREE.Mesh(torusGeometry, torusMaterial);
      torus.position.set( 0, .12, 1 );
      torus.rotation.set( 1.27, -.2, .5 );
      scene.add(torus);

      container.appendChild( renderer.domElement );
      renderer.render( scene, camera );
      run();
    }
    
    function run() {
      renderer.render( scene, camera );
      requestAnimationFrame(run);
    }
  })();
});
