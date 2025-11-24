#!/usr/bin/env node

import runGame from '../src/index.js'
import { gameRules, gameData } from '../src/games/even.js'

runGame(gameRules, gameData)
