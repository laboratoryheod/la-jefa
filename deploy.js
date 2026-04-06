#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 LA JEFA - CLI de Despliegue Automático');
console.log('=====================================\n');

// Colores para consola
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gold: '\x1b[38;5;220m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function executeCommand(command, description) {
  log(`\n📋 ${description}...`, 'cyan');
  try {
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    log(`✅ ${description} completado`, 'green');
    return result;
  } catch (error) {
    log(`❌ Error en ${description}:`, 'red');
    log(error.message, 'red');
    return null;
  }
}

async function checkGitStatus() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    return status.trim().length > 0;
  } catch {
    return false;
  }
}

async function getCurrentBranch() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' });
    return branch.trim();
  } catch {
    return 'main';
  }
}

async function createCommitMessage() {
  log('\n📝 Selecciona el tipo de cambio:', 'yellow');
  log('1. 🎨 feat: Nueva funcionalidad');
  log('2. 🐛 fix: Corrección de errores');
  log('3. 💄 style: Cambios de estilo');
  log('4. ♻️  refactor: Refactorización');
  log('5. 📝 docs: Documentación');
  log('6. 🚀 build: Cambios en build');
  log('7. 📦 Personalizado');
  
  const typeChoice = await question('\nSelecciona una opción (1-7): ');
  
  let type = '';
  let emoji = '';
  
  switch(typeChoice) {
    case '1': type = 'feat'; emoji = '🎨'; break;
    case '2': type = 'fix'; emoji = '🐛'; break;
    case '3': type = 'style'; emoji = '💄'; break;
    case '4': type = 'refactor'; emoji = '♻️'; break;
    case '5': type = 'docs'; emoji = '📝'; break;
    case '6': type = 'build'; emoji = '🚀'; break;
    case '7': 
      type = await question('Tipo de commit personalizado: ');
      emoji = await question('Emoji para el commit: ');
      break;
    default: 
      type = 'feat'; 
      emoji = '🎨';
  }
  
  const description = await question('Describe los cambios: ');
  return `${emoji} ${type}: ${description}`;
}

async function main() {
  try {
    // Verificar si estamos en el directorio correcto
    if (!fs.existsSync('package.json')) {
      log('❌ Error: No se encuentra package.json. ¿Estás en el directorio del proyecto?', 'red');
      process.exit(1);
    }

    log('🎯 LA JEFA - Sistema de Despliegue Automático', 'gold');
    log('=====================================\n');

    // 1. Verificar estado de Git
    log('🔍 Verificando estado del repositorio...', 'blue');
    const hasChanges = await checkGitStatus();
    
    if (!hasChanges) {
      log('✅ No hay cambios pendientes', 'green');
      const shouldContinue = await question('¿Quieres continuar con el despliegue? (s/n): ');
      if (shouldContinue.toLowerCase() !== 's') {
        log('👋 Proceso cancelado', 'yellow');
        process.exit(0);
      }
    }

    // 2. Build del proyecto
    log('\n🏗️  Iniciando proceso de build...', 'cyan');
    
    // Instalar dependencias si es necesario
    if (!fs.existsSync('node_modules')) {
      await executeCommand('bun install', 'Instalando dependencias');
    }

    // Build del proyecto
    const buildResult = await executeCommand('bun run build', 'Build del proyecto');
    if (!buildResult) {
      log('❌ El build falló. Revisa los errores arriba.', 'red');
      process.exit(1);
    }

    // 3. Git operations
    log('\n📦 Preparando cambios para Git...', 'cyan');
    
    await executeCommand('git add .', 'Agregando archivos al staging');
    
    const commitMessage = await createCommitMessage();
    await executeCommand(`git commit -m "${commitMessage}"`, 'Creando commit');

    // 4. Push a GitHub
    const currentBranch = await getCurrentBranch();
    log(`\n🚀 Enviando cambios a GitHub (rama: ${currentBranch})...`, 'cyan');
    
    const pushResult = await executeCommand(`git push origin ${currentBranch}`, 'Push a GitHub');
    if (!pushResult) {
      log('❌ El push falló. Revisa tu conexión o credenciales de Git.', 'red');
      process.exit(1);
    }

    // 5. Opciones de despliegue
    log('\n🌐 Opciones de despliegue:', 'yellow');
    log('1. 🎯 Vercel (Recomendado - Automático)');
    log('2. 🌍 Netlify (Manual - Arrastrar y soltar)');
    log('3. 📄 GitHub Pages (Gratis - Directo)');
    log('4. 🔗 Solo actualizar GitHub');

    const deployChoice = await question('\nSelecciona opción de despliegue (1-4): ');

    switch(deployChoice) {
      case '1':
        log('\n🎯 Despliegue con Vercel:', 'cyan');
        log('1. Ve a https://vercel.com');
        log('2. Conecta tu repositorio de GitHub: laboratoryheod/la-jefa');
        log('3. El despliegue será automático con cada push');
        log('4. Tu URL será: https://la-jefa.vercel.app');
        break;
        
      case '2':
        log('\n🌍 Despliegue con Netlify:', 'cyan');
        log('1. Ve a https://netlify.com');
        log('2. Arrastra la carpeta "dist" generada');
        log('3. Obtendrás una URL gratuita');
        break;
        
      case '3':
        log('\n📄 Despliegue con GitHub Pages:', 'cyan');
        log('1. Ve a tu repositorio en GitHub');
        log('2. Settings > Pages');
        log('3. Source: Deploy from a branch');
        log('4. Branch: main / (root)');
        log('5. Tu URL será: https://laboratoryheod.github.io/la-jefa');
        break;
        
      case '4':
        log('\n🔗 Solo GitHub actualizado', 'green');
        break;
        
      default:
        log('Opción no válida', 'red');
    }

    // 6. Resumen
    log('\n🎉 ¡Proceso completado!', 'gold');
    log('=====================================', 'gold');
    log('✅ Build exitoso', 'green');
    log('✅ Cambios subidos a GitHub', 'green');
    log('✅ Commit message: ' + commitMessage, 'green');
    
    log('\n📝 Próximos pasos:', 'blue');
    log('1. Completa el despliegue en la plataforma elegida');
    log('2. Comparte tu nueva URL');
    log('3. ¡Disfruta de tu sitio LA JEFA actualizado!');

    log('\n🔥 Para actualizar nuevamente, solo ejecuta: node deploy.js', 'yellow');

  } catch (error) {
    log(`❌ Error inesperado: ${error.message}`, 'red');
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Ejecutar el script
if (require.main === module) {
  main();
}

module.exports = { main };
