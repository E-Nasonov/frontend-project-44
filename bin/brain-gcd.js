#!/usr/bin/env node

import runGame from '../src/index.js'
import { gameRules, gameData } from '../src/games/gcd.js'

runGame(gameRules, gameData)
